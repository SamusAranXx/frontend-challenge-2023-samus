import { Box, IconButton, LinearProgress, Stack, Step, StepIndicator, Stepper, Typography } from '@mui/joy'
import { stepClasses } from '@mui/joy/Step'
import { stepIndicatorClasses } from '@mui/joy/StepIndicator'
import { useAppContext } from '../../../../context'
import { KeyboardArrowLeftOutlined } from '@mui/icons-material'

const Indicador = ({ goBack }) => {
	const { appValues } = useAppContext()

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				top: 0,
				px: 2,
				py: 2,
				zIndex: 10000,
				bgcolor: "#EDEFFC",
				position: "sticky"
			}}
		>
			<Stack direction="column" justifyContent="center" alignItems="center" sx={{ width: { xs: "100%", md: "30%" } }}>
				<Stack spacing={2} direction="row" sx={{ display: { xs: "flex", md: "none" } }} alignItems="center" justifyContent="space-between">
					<IconButton onClick={goBack} size="sm" sx={{ color: "#4F4FFF", bgcolor: "transparent", border: "1px solid", borderRadius: "50%" }}>
						<KeyboardArrowLeftOutlined sx={{ color: "#4F4FFF" }} />
					</IconButton>
					<Typography sx={{ fontWeight: 900, fontSize: "10px", lineHeight: "16px" }}>{`PASO ${appValues.paso} DE 2 `}</Typography>
					<LinearProgress determinate value={50 * appValues.paso} sx={{ color: '#4F4FFF', width: 200 }} />
				</Stack>
				<Stepper sx={{
					display: { xs: "none", md: "flex" },
					width: '100%',
					[`& .${stepClasses.completed}::after`]: {
						backgroundColor: '#4F4FFF',
					},
					[`& .${stepClasses.active} .${stepIndicatorClasses.root}`]: {
						borderColor: '#4F4FFF',
					},
					[`& .${stepClasses.root}::after`]: {
						color: '#4F4FFF',
						backgroundColor: 'transparent',
						backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)',
						backgroundSize: '7px 7px',
						backgroundPosition: 'center left',
					},
					[`& .${stepClasses.disabled} *`]: {
						color: 'neutral.plainDisabledColor',
					},
				}}>
					<Step
						active={appValues.paso > 1}
						completed={appValues.paso === 1}
						indicator={
							<StepIndicator variant={appValues.paso === 1 ? "solid" : "outlined"} sx={{ bgcolor: appValues.paso === 1 ? "#4F4FFF" : null }}>
								1
							</StepIndicator>
						}
					>
						<Typography sx={{ fontWeight: 700, fontSize: "16px", lineHeight: "24px" }}>Planes y coberturas</Typography>
					</Step>
					<Step
						active={appValues.paso < 2}
						completed={appValues.paso === 2}
						indicator={
							<StepIndicator variant={appValues.paso === 2 ? "solid" : "outlined"} sx={{ bgcolor: appValues.paso === 2 ? "#4F4FFF" : null }}>2</StepIndicator>
						}
					>
						<Typography sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "24px" }}>Resumen</Typography>
					</Step>
				</Stepper>
			</Stack>
		</Box>
	)
}

export default Indicador