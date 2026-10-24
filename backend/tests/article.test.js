import {test,describe,beforeEach} from "node:test"
import assert from "node:assert/strict"
import supertest from "supertest"
import app from "../app.js"
import article from "../models/article.js"
import user from "../models/user.js"
import category from "../models/category.js"
import jwt from "jsonwebtoken"
import "dotenv/config"


const api = supertest(app)

describe("Test functionality for the article module", () => {
    let token = " "
    let signUser = null
    beforeEach(async () => {
        const returnedUser = await user.findOne({username:"engrtemidayo2017@gmail.com"})
        signUser = {
            username:returnedUser.username,
            id:returnedUser.id,

        }
        token = jwt.sign(signUser,process.env.JWT_SECRET)
    })

    test("Can get all articles", async () => {
        await api.get("/api/users/articles")
        .set("Authorization",`Bearer ${token}`)
        .expect(200)
        .expect("Content-Type",/application\/json/)
    })
    test("Can create a new article", async () => {
        await article.deleteMany({})  
        const returnedCategory = (await categoryRouter.find({}))[0] 
        const catId = returnedCategory.id
        const newArticle = {
            articleTitle:"The Emergence of AI",
            articleContent:"A random content",
            categoryId: catId,
            articleMainImg: "",
            isPublished:false,
            isApprovedByModerator:false,
            created_at:new Date(),
            updated_at:null,
            deleted_at:null,
            created_by_id:signUser.id,
            updated_by_id:null,
            deleted_by_id:null,



        }    
    })

})
