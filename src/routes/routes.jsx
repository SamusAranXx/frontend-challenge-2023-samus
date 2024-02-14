import Layout from "../components/Layout"
import Home from "../components/Pages/Home"
import Planes from "../components/Pages/Planes"
import Resumen from "../components/Pages/Resumen"

const routes = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				path: "/",
				element: <Home />
			},
			{
				index: true,
				path: "/planes",
				element: <Planes />
			},
			{
				index: true,
				path: "/resumen",
				element: <Resumen />
			}
		]
	}
]

export default routes