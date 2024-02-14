import { CheckCircle, CircleOutlined } from "@mui/icons-material"
import { Box, Card, CardContent, Checkbox, Typography } from "@mui/joy"


const CheckCard = ({ imagen, titulo, desc, value, alias, setValue = null }) => {
	return (
		<Card
			sx={{
				width: "100%",
				position: "relative",
				maxWidth: "100%",
				boxShadow: "lg",
				borderRadius: "24px",
				border: value ? "3px solid" : null,
				p: 3,
			}}
		>
			<CardContent
				sx={{
					alignItems: "flex-start",
					textAlign: "left",
				}}
			>
				<Checkbox
					variant="plain"
					size="lg"
					checked={value}
					onChange={() => setValue(alias)}
					checkedIcon={<CheckCircle color="success" />}
					uncheckedIcon={<CircleOutlined />}
					sx={{ position: "absolute", top: 15, right: 15 }} />
				<Box
					component="img"
					src={imagen}
				/>
				<Typography sx={{ fontWeight: 900, fontSize: "20px", lineHeight: "28px" }}>{titulo}</Typography>
				<Typography sx={{ fontWeight: 400, fontSize: "12px", lineHeight: "20px" }}>{desc}</Typography>
			</CardContent>
		</Card>
	)
}

export default CheckCard