import { Box } from '@mui/joy'

const RootContainer = props => {
	return (
		<Box
			{...props}
			sx={[
				{
					minHeight: '100vh',
					overflow: 'hidden'
				},
				...(Array.isArray(props.sx) ? props.sx : [props.sx])
			]}
		/>
	)
}

export default RootContainer