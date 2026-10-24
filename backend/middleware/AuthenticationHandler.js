import user from "../models/user.js"
import jwt from "jsonwebtoken"
import "dotenv/config"
const AuthenticationHandler = async (request,response,next) => {

    const authorization = request.get('authorization')
    if(!authorization || !authorization.startsWith('Bearer ')){
        return response.status(401).json({error:"Authorization Token Missing"})
    }
    const token = authorization.replace('Bearer ','')
    try{
         const decodedToken = jwt.verify(token,process.env.JWT_SECRET)
         const getAuthUser = await user.findById(decodedToken.id)
         if(!getAuthUser){
            return response.status(401).json({error:'Unauthorized User'})
         }
         request.authUserId = getAuthUser.id
         next()
    }
    catch(error){
        console.error(error)
    }

}

export default AuthenticationHandler