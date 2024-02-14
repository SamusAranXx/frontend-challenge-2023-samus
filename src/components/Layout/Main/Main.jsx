import { Box } from "@mui/joy"


const Main = props => {
	return (
		<Box
			component="div"
			{...props}
			sx={[{
				p: 0
			}, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
		/>
	)
}

export default Main