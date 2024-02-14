import { extendTheme } from "@mui/joy"

const theme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					"50": "#fafafa",
					"100": "#f5f5f5",
					"200": "#eeeeee",
					"300": "#e0e0e0",
					"400": "#bdbdbd",
					"500": "#9e9e9e",
					"600": "#757575",
					"700": "#616161",
					"800": "#424242",
					"900": "#212121"
				}
			}
		}
	},
	fontFamily: {
		body: 'Poppins, var(--joy-fontFamily-fallback)'
	}
})

export default theme