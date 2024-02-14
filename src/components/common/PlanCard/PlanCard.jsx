import { Box, Button, Card, CardActions, CardContent, Chip, Divider, List, ListItem, Stack, Typography } from "@mui/joy"


const PlanCard = ({ imagen, titulo, precio, desc = [], actionClick = null, recomendado = false, isMe = true, oldPrecio = 0 }) => {
	return (
		<Card
			sx={{
				width: { xs: "100%", md: "90%" },
				position: "relative",
				maxWidth: "100%",
				borderRadius: "24px",
				p: 5,
				height: { xs: "auto", lg: 640 }
			}}
		>
			<CardContent>
				<Stack direction="row" alignItems="flex-start" justifyContent="space-between">
					<Stack direction="column">
						{recomendado && <Chip size="sm" variant="solid" sx={{ fontSize: "12px", fontWeight: 900, lineHeight: "16px", background: "#7DF0BA", color: "#000000", borderRadius: "4px" }}>Plan recomendado</Chip>}
						<Typography sx={{ fontSize: "24px", fontWeight: 900, lineHeight: "32px" }}>{titulo}</Typography>
						<Typography sx={{ fontSize: "12px", fontWeight: 900, lineHeight: "16px" }}>COSTO DEL PLAN</Typography>
						{!isMe && <Typography sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "20px" }}><del>{`$${oldPrecio} antes`}</del></Typography>}
						<Typography sx={{ fontSize: "20px", fontWeight: 900, lineHeight: "28px" }}>{`$${precio} al mes`}</Typography>
					</Stack>
					<Box component="img" src={imagen} />
				</Stack>
				<Divider inset="none" />
				<List size="lg" marker="disc" sx={{ mt: 2 }}>
					{desc.map((d, index) => (
						<ListItem key={index}>
							<Typography sx={{ fontSize: "16px", fontWeight: 400, lineHeight: "28px" }}>
								{d}
							</Typography>
						</ListItem>
					))}
				</List>
			</CardContent>
			<CardActions>
				<Button onClick={actionClick} sx={{ bgcolor: "#FF1C44", borderRadius: "32px", position: "absolute", bottom: 25, width: "80%" }}>
					Seleccionar plan
				</Button>
			</CardActions>
		</Card>
	)
}

export default PlanCard