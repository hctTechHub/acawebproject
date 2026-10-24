import {Outlet,ScrollRestoration} from "react-router-dom"
import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
import HomeComponent from "./HomeComponent"
const MainLayout = () => {
    return(

        <>
      
                <HeaderComponent />
                     <div className="relative mx-auto max-w-7xl">
                        <Outlet/>
                        <ScrollRestoration />
                    </div>
                <FooterComponent />

        </>
    )
}

export default MainLayout