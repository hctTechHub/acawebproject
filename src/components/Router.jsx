import {createBrowserRouter} from 'react-router-dom'
import MainLayout from "./MainLayout"
import HomeComponent from "./HomeComponent"
import AboutComponent from './AboutComponent'
import AcademicsComponent from './AcademicsComponent'
import BoardingComponent from './BoardingComponent'
const Router = createBrowserRouter([
            {
                element:<MainLayout />,
                children:[
                    {path:"/",element:<HomeComponent />},
                    {path:"/about",element:<AboutComponent />},
                    {path:"/academics",element:<AcademicsComponent />},
                    {path:"/boarding",element:<BoardingComponent/>}
                ]
               
            }
    ])


export default Router