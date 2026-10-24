import {test,describe,beforeEach,afterEach} from 'node:test'
import assert from 'node:assert/strict'
import supertest from 'supertest'
import category from '../models/category.js'
import app from '../app.js'
import jwt from 'jsonwebtoken'
import user from '../models/user.js'
import "dotenv/config"


const api = supertest(app)

describe("Test functionality for Category", () => {
    let token = ''
    beforeEach(async () => {
        const returnedUser = await user.findOne({username:"engrtemidayo2017@gmail.com"})
        const signedUser = {
            username: returnedUser.username,
            id: returnedUser.id
        }
        token = jwt.sign(signedUser,process.env.JWT_SECRET)
    })
    test("Get all categories", async () => {
        await api.get("/api/users/categories")
        .set("Authorization",`Bearer ${token}`)
        .expect(200)
        .expect("Content-Type",/application\/json/)
    })

    test("Create a new category", async () => {
       await category.deleteMany({})
       const newCategory = {
            categoryName:"Technology"
        }
        await api.post("/api/users/create_category")
        .set("Authorization",`Bearer ${token}`)
        .send(newCategory)
        .expect(201)
        .expect('Content-Type',/application\/json/)
        //const addedCategory = await category.find({})
        //assert.strictEqual(addedCategory.length,1)
    })

    test("Can get a single category", async () => {
        const returnedCategory = (await category.find({}))[0]
        const catId = returnedCategory.id
        await api.get(`/api/users/category/${catId}`)
        .set("Authorization",`Bearer ${token}`)
        .expect(200)
        .expect("Content-Type",/application\/json/)
       
    })

    test("Can edit a category", async () => {
        const returnedCategory = (await category.find({}))[0]
        const catId = returnedCategory.id
        await api.put(`/api/users/category/edit/${catId}`)
        .set("Authorization",`Bearer ${token}`)
        .send({categoryName:"Science & Technology"})
        .expect(200)
        .expect("Content-Type",/application\/json/)
    })

    test("Can delete a category", async () => {
        const returnedCategory = (await category.find({}))[0]
        const catId = returnedCategory.id
        await api.delete("/api/users/category/delete")
        .set("Authorization",`Bearer ${token}`)
        .send({catId})
        .expect(200)
        .expect("Content-Type",/application\/json/)
    })


})