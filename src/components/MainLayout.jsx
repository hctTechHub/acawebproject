import {Outlet,ScrollRestoration} from "react-router-dom"
import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
import HomeComponent from "./HomeComponent"
const MainLayout = () => {
    return(
        <div className="relative min-h-screen">
           
                <HeaderComponent />
                    <Outlet/>
                    <ScrollRestoration />
                <FooterComponent/>
                
            
        </div>
    )
}

export default MainLayout