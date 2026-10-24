import {redirect,Outlet} from "react-router-dom"
import { jwtDecode } from "jwt-decode"

export const ProtectedRoute = () => {
    const token = window.localStorage.getItem("usrTkn")
    if(token == null){
       console.log("Token is null")
       return redirect("/login")
    }
    try{
            const decodedToken = jwtDecode(token)
           if((decodedToken.exp * 1000) < Date.now() ){
                console.log("expired")
                localStorage.removeItem("usrTkn")
                return redirect("/login")
           } 
    }
    catch(error){
            localStorage.removeItem("usrTkn")
            return redirect("/login")
    }

}

