import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/user.js"
import "dotenv/config"

const loginService = async (request,response) => {
    const {username,password} = request.body
    const user = await User.findOne({username})
    if(!user){
        return response.status(404).json({error:"User not found"})
    }
    const passwordVerified = user === null ? false : await bcrypt.compare(password,user.password)
    if(!(user && passwordVerified)){
        return response.status(400).json({error:"Username or password is incorrect"})
    }

    const signUser = {
        username:user.username,
        name:user.name,
        id:user.id
    }
    const token = jwt.sign(signUser,process.env.JWT_SECRET,{expiresIn:"10h"})
    return response.status(200).json({username:user.username,name:user.name,token})
}

export default loginService