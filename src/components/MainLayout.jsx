import {Outlet} from "react-router-dom"
import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
import HomeComponent from "./HomeComponent"
const MainLayout = () => {
    return(
        <div className="relative min-h-screen">
           
                <HeaderComponent />
                    <Outlet/>
                <FooterComponent/>
                
            
        </div>
    )
}

export default MainLayout