import { Card, CardContent, Container, Divider, Grid, IconButton, Typography } from '@mui/joy'
import { useAppContext } from '../../../context'
import { useNavigate } from 'react-router-dom'
import Indicador from '../../misc/_planes/Indicador'
import { Group, KeyboardArrowLeftOutlined } from '@mui/icons-material'

const Resumen = () => {
	const navigate = useNavigate()
	const { appValues, setAppValues } = useAppContext()

	const goBack = () => {
		setAppValues({
			...appValues,
			paso: 1
		})
		navigate("/planes")
	}

	return (
		<>
			<Indicador goBack={goBack} />
			<Container maxWidth="lg" sx={{ alignItems: "center", justifyContent: "center", mt: -10, pt: 10, pb: 20, pl: 2, pr: 2 }}>
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
						<Typography sx={{ fontWeight: 700, fontSize: { xs: "32px", md: "40px" }, lineHeight: "48px", textAlign: "left" }}>
							Resumen del seguro
						</Typography>
					</Grid>
					<Grid xs={12}>
						<Card
							sx={{
								width: "100%",
								position: "relative",
								maxWidth: "100%",
								boxShadow: "lg",
								borderRadius: "24px",
								p: 3,
							}}
						>
							<CardContent
								sx={{
									alignItems: "flex-start",
									textAlign: "left",
								}}
							>
								<Typography sx={{ fontWeight: 900, fontSize: "10px", lineHeight: "16px" }}>PRECIOS CALCULADOS PARA:</Typography>
								<Typography startDecorator={<Group color="neutral.900" />} sx={{ fontWeight: 700, fontSize: "20px", lineHeight: "28px" }}>{`${appValues.user.name} ${appValues.user.lastName}`}</Typography>
								<Divider inset='none' />
								<Typography sx={{ fontWeight: 700, fontSize: "16px", lineHeight: "24px", mt: 4 }}>Responsable de pago</Typography>
								<Typography sx={{ fontWeight: 400, fontSize: "14px", lineHeight: "24px" }}>{`DNI: ${appValues.info.numDocumento}`}</Typography>
								<Typography sx={{ fontWeight: 400, fontSize: "14px", lineHeight: "24px" }}>{`Celular: ${appValues.info.celular}`}</Typography>
								<Typography sx={{ fontWeight: 700, fontSize: "16px", lineHeight: "24px", mt: 4 }}>Plan elegido</Typography>
								<Typography sx={{ fontWeight: 400, fontSize: "14px", lineHeight: "24px" }}>{`${appValues.plan.titulo}`}</Typography>
								<Typography sx={{ fontWeight: 400, fontSize: "14px", lineHeight: "24px" }}>{`Costo del plan: $${appValues.plan.precio} al mes`}</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default Resumen