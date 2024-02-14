import RootContainer from "./RootContainer"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import { Outlet } from "react-router-dom"

const Layout = () => {
	return (
		<RootContainer>
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</RootContainer>
	)
}

export default Layout