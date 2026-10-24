import express from "express"
import upload from "../middleware/upload.js"

const uploadRouter = express.Router()
uploadRouter.post("/file",upload.single("image"),(request,response) => {
    const imgUrl = `/uploads/${request.file.filename}`
    response.status(200).json({
        successMsg:"File Uploaded Successfully!!!",
        filename:request.file.filename,
        url: imgUrl,

    })
})

export default uploadRouter