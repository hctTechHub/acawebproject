import {useRoutes} from 'react-router-dom'
import MainLayout from "./MainLayout"
import HomeComponent from "./HomeComponent"
import AboutComponent from './AboutComponent'
import AcademicsComponent from './AcademicsComponent'
const Router = () => {
    const routes = [
            {
                element:<MainLayout />,
                children:[
                    {path:"/",element:<HomeComponent />},
                    {path:"/about",element:<AboutComponent />},
                    {path:"/academics",element:<AcademicsComponent />}
                ]
               
            }
    ]

    return useRoutes(routes)
}

export default Router