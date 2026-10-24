import {createContext,useContext,useState,useEffect} from "react"
import axios from "axios"
import {io} from "socket.io-client"

const CategoryContext = createContext()

export const CategoryProvider = ({children}) => {
        const baseURL = import.meta.env.VITE_BASE_URL
        const token = window.localStorage.getItem('usrTkn')
        //get cached categories immediately
        const [categories,setCategories] = useState(() => {
                const savedCategories = window.localStorage.getItem('categories')
                return savedCategories ? JSON.parse(savedCategories) 
                :[]
            }
        )
        const getCategories = async () => {
            const res = await axios.get(`${baseURL}/categories`,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })

            //update the react state
            setCategories(res.data) 

            //update the cache in local storage
            window.localStorage.setItem("categories",JSON.stringify(res.data))

        }

        useEffect(() => {
            getCategories()
            /*const socket = io("http://localhost:3000")
            socket.on("categoryDeleted",(data) => {
                    setCategories(previousCategories => previousCategories.filter(category => category.id !== data.categoryId))
            })

            return () => {
                socket.disconnect()
            }*/

        },[categories])

        return(
            <CategoryContext.Provider value={{categories,getCategories,token}}>
                    {children}
            </CategoryContext.Provider>
        )

}

export const useCategories = () => {
    return useContext(CategoryContext)
}