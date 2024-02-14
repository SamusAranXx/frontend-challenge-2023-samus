import { Box, Stack, Typography } from "@mui/joy"
import assetsList from "../../../assets"


const Footer = () => {
	return (
		<Box
			component={Stack}
			direction={{ xs: "column", md: "row" }}
			spacing={2}
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				width: "100%",
				bottom: 0,
				px: { xs: 2, sm: 28 },
				py: 3,
				zIndex: 10000,
				backgroundColor: "#000000",
				position: "fixed"
			}}
		>
			<Box
				component="img"
				loading="lazy"
				src={assetsList.LogoFooter}
				sx={{
					width: "86px"
				}}
			/>
			<Box sx={{ display: "flex", flexDirection: "row", gap: 3, alignItems: "center" }}>
				<Typography align="center" sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "16px", color: "#F8F9FF" }}>{`© ${new Date().getFullYear()} RIMAC Seguros y Reaseguros`}</Typography>
			</Box>
		</Box>
	)
}

export default Footer