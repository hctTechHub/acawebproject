import express from "express"
import bcrypt from "bcrypt"
import User from "../models/user.js"
import jwt from "jsonwebtoken"
import "dotenv/config"
import loginService from "../utilHelpers/loginService.js"
const userRouter = express.Router()

//get all the app users
userRouter.get("/", async (request,response) => {
    const allUsers = await User.find({})
    console.log(allUsers)
    response.json(allUsers).status(200)
})

//add a new app user
userRouter.post("/add", async (request,response) => {
   let {username,name,password} = request.body
   const saltRounds = 10
   password = await bcrypt.hash(password,saltRounds)
   const user = new User({username,name,password})
   try{
        const savedUser = await user.save()
        response.status(201).json(savedUser)
   }
   catch(error){
        response.status(400).json("Username has been taken already!!!")
   }

})

//verify password reset link
userRouter.get("/urspw", async (request,response) => {
     
               const {token} = request.query   
               if(!token){
                    return response.status(400).json({error:"Token Not Found"})
               }
               const decodedToken = jwt.verify(token,process.env.JWT_SECRET)  
               const userEmail = decodedToken.email
               const user = await User.findOne({username:`${userEmail}`})
               console.log(user)
               if(!user){
                    return response.status(400).json({error: `${userEmail}`})
               }

               const newPassword = "My$elf2015"
               user.password = bcrypt.hash(newPassword)
               await user.save()
               return response.status(200).json({successMsg:"Password Reset Successful"})

    

})
//Login user
userRouter.post("/login", async (request,response) => {
    loginService(request,response)
})

export default userRouter