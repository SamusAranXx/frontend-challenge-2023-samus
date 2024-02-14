import { Suspense } from 'react'
import { CssVarsProvider } from '@mui/joy/styles'
import theme from './theme'
import { useRoutes } from 'react-router-dom'
import routes from "./routes"
import { CircularProgress, CssBaseline } from '@mui/joy'
import { AppContextProvider } from './context'

function App() {
	const renderRoutes = useRoutes(routes)

	return (
		<AppContextProvider>
			<CssVarsProvider theme={theme}>
				<CssBaseline />
				<Suspense fallback={<CircularProgress />}>
					{renderRoutes}
				</Suspense>
			</CssVarsProvider>
		</AppContextProvider>
	)
}

export default App