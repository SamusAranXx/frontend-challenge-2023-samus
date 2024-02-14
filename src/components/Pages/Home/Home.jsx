import { Box, Button, Checkbox, Container, FormHelperText, Grid, Input, Option, Select, Stack, Typography } from '@mui/joy'
import assetsList from '../../../assets'
import { useState } from 'react'
import { useAppContext } from '../../../context'
import { InfoOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { NumericFormat } from 'react-number-format'

const Home = () => {
	const navigate = useNavigate()
	const { appValues, setAppValues } = useAppContext()
	const [body, setBody] = useState({ numDocumento: "", tipoDocumento: "dni", celular: "", politicasP: false, politicasC: false })
	const [errorsInput, setErrorsInput] = useState({ numDocumento: false, celular: false, politicasP: false, politicasC: false })

	const onChange = ({ target: { name, value } }) => {
		setBody({ ...body, [name]: value })
	}

	const onSubmit = () => {
		if (body.numDocumento !== "" && body.celular !== "" && body.politicasP && body.politicasC) {
			setAppValues({
				...appValues,
				info: { ...body }
			})
			navigate("/planes")
		} else {
			setErrorsInput({
				...errorsInput,
				numDocumento: body.numDocumento === "" ? true : false,
				celular: body.celular === "" ? true : false,
				politicasP: !body.politicasP ? true : false,
				politicasC: !body.politicasC ? true : false

			})
		}
	}

	return (
		<Container maxWidth={false} sx={{
			background: `linear-gradient(29deg, rgba(213,117,255,1) 0%, rgba(235,190,255,1) 7%, rgba(255,255,255,1) 50%, rgba(215,255,253,1) 90%, rgba(108,246,239,1) 100%)`,
			minHeight: "100vh",
			height: "auto",
			pb: 11
		}}>
			<Container maxWidth="xl" sx={{ alignItems: "center", justifyContent: "center", mt: -10, pt: 10, pb: 10, pl: 2, pr: 2 }}>
				<Grid container spacing={2} sx={{ mt: 8 }}>
					<Grid xs={7} sx={{ display: { xs: "initial", md: "none" } }}>
						<Stack direction="column" alignItems="flex-start" justifyContent="flex-start" spacing={2} sx={{ width: { xs: "100%", md: "50%" } }}>
							<Typography variant="solid" sx={{ fontSize: "12px", fontWeight: 700, lineHeight: "16px", background: "linear-gradient(#00F4E2, #00FF7F)", color: "#000000", borderRadius: "4px" }}>Seguro Salud Flexible</Typography>
							<Typography sx={{ fontSize: "28px", fontWeight: 700, lineHeight: "40px" }}>Creado para ti y tu familia</Typography>
						</Stack>
					</Grid>
					<Grid xs={5} sx={{ display: { xs: "initial", md: "none" } }}>
						<Box
							component="img"
							src={assetsList.HomeBanner}
							loading="lazy"
							sx={{ width: "100%" }}
						/>
					</Grid>
					<Grid xs={6} sx={{ display: { xs: "none", md: "initial" } }}>
						<Box
							component="img"
							src={assetsList.HomeBanner}
							loading="lazy"
							sx={{ width: "520px", maxWidth: "100%" }}
						/>
					</Grid>
					<Grid xs={12} sm={6}>
						<Stack direction="column" alignItems="flex-start" justifyContent="flex-start" spacing={2} sx={{ width: { xs: "100%", md: "50%" } }}>
							<Typography variant="solid" sx={{ display: { xs: "none", md: "initial" }, fontSize: "14px", fontWeight: 700, lineHeight: "16px", background: "linear-gradient(#00F4E2, #00FF7F)", color: "#000000", borderRadius: "4px" }}>Seguro Salud Flexible</Typography>
							<Typography sx={{ display: { xs: "none", md: "initial" }, fontSize: "32px", fontWeight: 700, lineHeight: "40px" }}>Creado para ti y tu familia</Typography>
							<Typography sx={{ fontSize: "14px", fontWeight: 600, lineHeight: "20px" }}>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</Typography>
							<Input
								error={errorsInput.numDocumento}
								size="lg"
								variant="outlined"
								value={body.numDocumento}
								name="numDocumento"
								onChange={onChange}
								placeholder="Nro. de documento"
								sx={{
									width: "100%",
									border: "1px solid",
									'--Input-focusedInset': 'var(--any, )',
									'--Input-focusedThickness': '0.12rem',
									'--Input-focusedHighlight': 'rgba(0, 0, 0, .25)',
									'&::before': {
										transition: 'box-shadow .15s ease-in-out',
									},
									'&:focus-within': {
										borderColor: '#000000',
									}
								}}
								slotProps={{
									input: {
										component: NumericFormat
									}
								}}
								startDecorator={
									<>
										<Select
											size="lg"
											value={body.tipoDocumento}
											name="tipoDocumento"
											variant="plain"
											onChange={(_e, value) => setBody({ ...body, tipoDocumento: value, numDocumento: "" })}
											slotProps={{
												listbox: {
													variant: 'outlined',
												},
											}}
											sx={{ borderRight: "1px solid", borderRadius: 0, mr: 2, '&:hover': { bgcolor: 'transparent' } }}
										>
											<Option value="dni">DNI</Option>
											<Option value="ce">C.E.</Option>
											<Option value="ruc">RUC</Option>
										</Select>
									</>
								}
							/>
							<Input
								error={errorsInput.celular}
								size="lg"
								variant="outlined"
								value={body.celular}
								name="celular"
								onChange={onChange}
								placeholder="Celular"
								sx={{
									width: "100%",
									border: "1px solid",
									'--Input-focusedInset': 'var(--any, )',
									'--Input-focusedThickness': '0.12rem',
									'--Input-focusedHighlight': 'rgba(0, 0, 0, .25)',
									'&::before': {
										transition: 'box-shadow .15s ease-in-out',
									},
									'&:focus-within': {
										borderColor: '#000000',
									}
								}}
							/>
							<Checkbox
								onChange={({ target: { checked } }) => setBody({ ...body, politicasP: checked })}
								color={errorsInput.politicasP ? "danger" : "neutral"}
								checked={body.politicasP}
								label={<Typography color={errorsInput.politicasP ? "danger" : "neutral"} sx={{ fontSize: "12px", fontWeight: 400, lineHeight: "20px" }}>Acepto lo Política de Privacidad</Typography>}
							/>
							<Checkbox
								onChange={({ target: { checked } }) => setBody({ ...body, politicasC: checked })}
								color={errorsInput.politicasC ? "danger" : "neutral"}
								checked={body.politicasC}
								label={<Typography color={errorsInput.politicasC ? "danger" : "neutral"} sx={{ fontSize: "12px", fontWeight: 400, lineHeight: "20px" }}>Acepto la Política Comunicaciones Comerciales</Typography>}
							/>
							{errorsInput.politicasC || errorsInput.politicasP || errorsInput.numDocumento || errorsInput.celular ?
								<FormHelperText sx={{ color: "red" }}>
									<InfoOutlined color="danger" />
									Debe llenar todos los campos.
								</FormHelperText>
								: null
							}
							<Typography componen="a" sx={{ fontSize: "12px", fontWeight: 600, lineHeight: "20px", textDecoration: "underline" }}>Aplican Términos y Condiciones.</Typography>
							<Button onClick={onSubmit} variant="solid" size="lg" sx={{ width: { xs: "100%", md: "auto" }, bgcolor: "black", borderRadius: "40px", gap: "8px", p: "20px, 40px, 20px, 40px" }}>Cotiza aquí</Button>
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Container>
	)
}

export default Home