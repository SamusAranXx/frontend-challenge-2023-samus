import { Box, Typography } from "@mui/joy"
import assetsList from "../../../assets"
import { useNavigate } from "react-router-dom"
import { Phone } from "@mui/icons-material"

const Header = () => {
	const navigate = useNavigate()

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				width: "100%",
				top: 0,
				px: { xs: 2, md: 28 },
				py: 2,
				zIndex: 10000,
				backgroundColor: "transparent",
				position: "sticky"
			}}
		>
			<Box
				onClick={() => navigate("/")}
				component="img"
				loading="lazy"
				src={assetsList.LogoHeader}
				sx={{
					width: "74px",
					cursor: "pointer"
				}}
			/>
			<Box sx={{ display: "flex", flexDirection: "row", gap: 3, alignItems: "center" }}>
				<Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#03050F", lineHeight: "16px", display: { xs: "none", sm: "initial" } }}>¡Compra por este medio!</Typography>
				<Typography startDecorator={<Phone />} sx={{ fontSize: "18px", fontWeight: 700, lineHeight: "20px", color: "#03050F" }}>(01) 411 6001</Typography>
			</Box>
		</Box>
	)
}

export default Header