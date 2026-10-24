import express from "express"
import Category from "../models/category.js"
import "dotenv/config"
import user from "../models/user.js"
import authMiddleware from "../middleware/AuthenticationHandler.js"

const categoryRouter = express.Router()
categoryRouter.get("/categories",async (request,response) => {
        const categories = await Category.find({})
        response.status(200).json(categories)
})
categoryRouter.get("/category/:id",async (request,response) => {
        const {id} = request.params
        console.log(id)
        const returnedCategory = await Category.findById(id)
        return response.status(200).json(returnedCategory)


})
categoryRouter.post("/create_category",authMiddleware, async (request,response) => {
       const authUserId = request.authUserId
       const {categoryName} = request.body
       const category = {
                categoryName,
                created_at: new Date(),
                updated_at: null,
                deleted_at: null,
                created_by_id: authUserId,
                updated_by_id: null,
                deleted_by_id: null
               
        }
        const newCategory = new Category(category)
        console.log(newCategory)
        try{
                const savedCategory = await newCategory.save()
        }
        catch(error){
                console.error(error)
        }

        response.status(201).json({successMsg:`Category Created!!!`})


})
categoryRouter.put("/category/edit/:id", async (request,response) => {
        const userId = request.authUserId
        const {id} = request.params
        const {categoryName} = request.body
        const categoryToEdit = await Category.findById(id)
        categoryToEdit.categoryName = categoryName
        categoryToEdit.updated_at = new Date
        categoryToEdit.updated_by_id = userId
        const updatedCategory = await categoryToEdit.save()
        console.log(updatedCategory)
        return response.status(200).json({successMsg:"Edited Successfully"})
})
categoryRouter.delete("/category/delete", async (request,response) => {
        const {catId} = request.body
        await Category.deleteOne({_id:catId})
        return response.status(200).json({successMsg:"Category Deleted Successfully"})

})






export default categoryRouter