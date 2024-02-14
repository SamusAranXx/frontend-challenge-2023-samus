import { Container, Grid, LinearProgress } from "@mui/joy"
import assetsList from "../../../../assets"
import { useEffect, useState } from "react"
import { ApiRequest } from "../../../../helpers/axiosInstances"
import PlanCard from "../../../common/PlanCard"
import { useAppContext } from "../../../../context"
import { getPorcentaje } from "../../../../helpers/utils"
import { useNavigate } from 'react-router-dom'
import CommonSlider from "../../../common/CommonSlider"

const PlanesList = ({ isMe = true }) => {
	const navigate = useNavigate()
	const { appValues, setAppValues } = useAppContext()
	const [listPlanes, setListPlanes] = useState([])
	const [isLoading, setisLoading] = useState(false)

	useEffect(() => {
		async function requestPlanes() {
			try {
				setisLoading(true)
				const { data } = await ApiRequest().get("/plans.json")
				if (isMe) {
					setListPlanes(data.list.filter(plan => parseInt(plan.age) >= parseInt(appValues.user.age)))
				} else {
					setListPlanes(data.list)
				}
				setisLoading(false)
			} catch (error) {
				setisLoading(false)
				console.log(error)
			}
		}
		requestPlanes()
	}, [isMe])

	const selectPlan = (plan) => {
		setAppValues({
			...appValues,
			plan: {
				titulo: plan.name,
				precio: isMe ? plan.price : plan.price - getPorcentaje(5, plan.price)
			},
			paso: 2
		})
		navigate("/resumen")
	}

	return (
		<Container maxWidth="lg" sx={{ mt: 2 }}>
			<Grid container spacing={4}>
				{isLoading &&
					<Grid xs={12}>
						<LinearProgress color="danger" />
					</Grid>
				}
				<Grid xs={12}>
					<CommonSlider>
						{listPlanes.map((plan, index) => (
							<PlanCard
								key={index}
								imagen={assetsList.planes[plan.name]}
								titulo={plan.name}
								precio={isMe ? plan.price : plan.price - getPorcentaje(5, plan.price)}
								desc={plan.description}
								actionClick={() => selectPlan(plan)}
								recomendado={plan.name === "Plan en Casa y Clínica" ? true : false}
								isMe={isMe}
								oldPrecio={plan.price}
							/>
						))}
					</CommonSlider>
				</Grid>
			</Grid>
		</Container>
	)
}

export default PlanesList