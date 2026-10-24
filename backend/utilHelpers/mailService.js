import  "dotenv/config"
import nodemailer from "nodemailer"
import jwt from "jsonwebtoken"


const transporter = nodemailer.createTransport({
        host:"sandbox.smtp.mailtrap.io",
        port:2525,
        auth:{
            user:process.env.MAILTRAP_USER_EMAIL,
            pass:process.env.MAILTRAP_USER_PASSWORD
        }
})

export default async function sendMail(email){
    const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"10m"})
    const passwordResetLink = `http://localhost:3000/api/users/urspw?token=${token}`
    const message = {
      from: "ACA admin<acaadmin@example.com>",
      to: `${email}`,
      subject:"Password Reset",
      html:`<p> Follow the below link to reset your password </p>
      <a href="${passwordResetLink}">Password Reset</a>
      <p>The Link expires after 10 minute</p>`
    }

    try{
            const info = await transporter.sendMail(message)
            console.log("Email Sent:",info.messageId)
    }
    catch(error){
        console.error("failed to send email:",error)
    }
}

