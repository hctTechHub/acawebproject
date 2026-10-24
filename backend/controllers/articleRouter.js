import express from "express"
import upload from "../middleware/upload.js"
import Article from "../models/article.js"
import authMiddleware from "../middleware/AuthenticationHandler.js"
const articleRouter = express.Router()

articleRouter.get("/articles",async (request,response) => {
    const allArticles = await Article.find({}).sort({created_at:-1}).populate("category","categoryName")
    console.log(allArticles)
    response.status(200).json(allArticles)
})
articleRouter.post("/create_article",authMiddleware,upload.fields([{name:"file",maxCount:1},{name:"carouselImages",maxCount:4}]),async (request,response) => {
   // console.log(request.body)
    const uploadedFiles = request.files
    const bannerImg = uploadedFiles.file[0].filename
    const uploadedCarouselImages = uploadedFiles.carouselImages
    console.log(uploadedFiles)
    let selectedFiles = request.body.selectedFiles
    selectedFiles = JSON.parse(selectedFiles)
    const carouselImages = uploadedCarouselImages ? uploadedCarouselImages.map((image,index) => ({filename:image.filename,caption:selectedFiles[index]?.caption || ''})) : []
    console.log(carouselImages)
    console.log(selectedFiles)
    let data = request.body.data
    data = JSON.parse(data)
    let authUserId = request.body.userId
    authUserId = JSON.parse(authUserId)
    let selectedCategories = request.body.selectedCategories
    selectedCategories = JSON.parse(selectedCategories)
    const categories = selectedCategories.map((category) => category.id)
    //console.log(typeof categories)
    
    const articleObj = {
        title:data.title,
        category:categories,
        content:data.article_content,
        bannerImg:bannerImg,
        carouselImages:carouselImages,
        isPublished:data.isPublished,
        created_at: new Date(),
        created_by_id:authUserId,
        role:"User",
        user:authUserId
    }

    const newArticle = new Article(articleObj)
    try{
            const savedArticle = await newArticle.save()
            response.status(201).json({successMsg:"Article Created Successfully",savedArticle:savedArticle})
    }
    catch(error){
        console.log(error.message)
        response.status(500).json({error:error.message})
    }
    
})

export default articleRouter
