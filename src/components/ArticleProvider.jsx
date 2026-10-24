
import {createContext,useContext,useState,useEffect} from "react"
import axios from "axios"

const ArticleContext = createContext()

export const ArticleProvider = ({children}) => {
    const baseURL = import.meta.env.VITE_BASE_URL
    const token = window.localStorage.getItem('usrTkn')
    //get cached articles
    const savedArticles = window.localStorage.getItem("articles")
    const [articles,setArticles] = useState(() => {
        return savedArticles ? JSON.parse(savedArticles) : []
    })

    const getArticles = async () => {
        const res = await axios.get(`${baseURL}/articles`,{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        console.log(res)
        setArticles(res.data)
        //update the cached articles
        window.localStorage.setItem("articles",JSON.stringify(res.data))
    }

    useEffect(() => {
            getArticles()
    },[])

    return (
        <ArticleContext.Provider value={{articles}}>
            {children}
        </ArticleContext.Provider>
    )
}


export const useArticles = () => {
    return useContext(ArticleContext)
}