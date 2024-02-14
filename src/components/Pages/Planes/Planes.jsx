import { Container, Grid, IconButton, Typography } from '@mui/joy'
import { useState, useEffect } from 'react'
import { useAppContext } from '../../../context'
import { useNavigate } from 'react-router-dom'
import { ApiRequest } from '../../../helpers/axiosInstances'
import Indicador from '../../misc/_planes/Indicador'
import { KeyboardArrowLeftOutlined } from '@mui/icons-material'
import CheckCard from '../../common/CheckCard'
import assetsList from '../../../assets'
import PlanesList from '../../misc/_planes/PlanesList'
import { calcularEdad, formatDate } from '../../../helpers/utils'

const Planes = () => {
	const navigate = useNavigate()
	const { appValues, setAppValues } = useAppContext()
	const [userInfo, setUserInfo] = useState({ name: "", lastName: "", birthDay: "" })
	const [panel, setPanel] = useState(0)

	const goBack = () => {
		setAppValues({
			...appValues,
			paso: 1
		})
		navigate("/")
	}

	useEffect(() => {
		async function requestInfo() {
			try {
				const { data } = await ApiRequest().get("/user.json")
				setUserInfo(data)
				setAppValues({
					...appValues,
					user: {
						...data,
						age: calcularEdad(formatDate(data.birthDay))
					}
				})
			} catch (error) {
				console.log(error)
			}
		}
		requestInfo()
	}, [])

	return (
		<>
			<Indicador goBack={goBack} />
			<Container maxWidth="xl" sx={{ alignItems: "center", justifyContent: "center", mt: -10, pt: 10, pb: 20, pl: 2, pr: 2 }}>
				<Grid container spacing={2} sx={{ mt: 8 }}>
					<Grid xs={12} sx={{ display: { xs: "none", md: "flex" } }}>
						<Typography startDecorator={
							<IconButton onClick={goBack} size="sm" sx={{ color: "#4F4FFF", bgcolor: "transparent", border: "1px solid", borderRadius: "50%" }}>
								<KeyboardArrowLeftOutlined sx={{ color: "#4F4FFF" }} />
							</IconButton>
						}
							sx={{
								color: "#4F4FFF",
								fontWeight: 700,
								fontSize: "18px",
								lineHeight: "20px"
							}}
						>Volver</Typography>
					</Grid>
					<Grid xs={12} sx={{ mt: { xs: 0, md: 2 } }}>
						<Typography sx={{ fontWeight: 700, fontSize: "40px", lineHeight: "48px", textAlign: { xs: "left", md: "center" } }}>
							{`${userInfo.name} ¿Para quién deseas cotizar?`}
						</Typography>
					</Grid>
					<Grid xs={12}>
						<Typography sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "28px", textAlign: { xs: "left", md: "center" } }}>
							Selecciona la opción que se ajuste más a tus necesidades.
						</Typography>
					</Grid>
					<Grid xs={null} md={3} />
					<Grid xs={12} md={3}>
						<CheckCard
							alias={1}
							value={panel === 1 ? true : false}
							setValue={setPanel}
							imagen={assetsList.IconMe}
							titulo="Para mí"
							desc="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
						/>
					</Grid>
					<Grid xs={12} md={3}>
						<CheckCard
							alias={2}
							value={panel === 2 ? true : false}
							setValue={setPanel}
							imagen={assetsList.IconThey}
							titulo="Para alguien más"
							desc="Realiza una cotización para uno de tus familiares o cualquier persona."
						/>
					</Grid>
					<Grid xs={null} md={3} />
				</Grid>
				{panel === 1 &&
					<PlanesList isMe={true} />
				}
				{panel === 2 &&
					<PlanesList isMe={false} />
				}
			</Container>
		</>
	)
}

export default Planes