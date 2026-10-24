import {createBrowserRouter} from 'react-router-dom'
import MainLayout from "./MainLayout"
import HomeComponent from "./HomeComponent"
import AboutComponent from './AboutComponent'
import AcademicsComponent from './AcademicsComponent'
import BoardingComponent from './BoardingComponent'
import LoginComponent from './LoginComponent'
import DashboardComponent from "./DashboardComponent"
import AdminLayoutComponent from './AdminLayoutComponent'
import CreateArticleComponent from "./CreateArticleComponent"
import ArticlesComponent from "./ArticlesComponent"
import AdmissionComponent from "./AdmissionComponent"
import { ProtectedRoute } from './ProtectedRoute'
import { ArticleProvider } from './ArticleProvider'

const Router = createBrowserRouter([
            {
                element:<MainLayout />,
                children:[
                    {path:"/",element:<ArticleProvider><HomeComponent /></ArticleProvider>},
                    {path:"/about",element:<AboutComponent />},
                    {path:"/academics",element:<AcademicsComponent />},
                    {path:"/boarding",element:<BoardingComponent/>},
                    {path:"/login",element:<LoginComponent/>},
                    {path:"/admission",element:<AdmissionComponent/>}
                ],
            },
            {
                        element:<AdminLayoutComponent/>,
                        children:[
                            {path:"/dashboard",loader:ProtectedRoute,element:<DashboardComponent/>},
                            {path:"/dashboard/create_article",loader:ProtectedRoute,element:<CreateArticleComponent/>},
                            {path:"/dashboard/articles",loader:ProtectedRoute,element:<ArticleProvider><ArticlesComponent/></ArticleProvider>}
                        ]
                


            }
               
    ])


export default Router