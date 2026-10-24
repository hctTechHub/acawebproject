import {test,after,beforeEach,describe} from "node:test"
import assert from "node:assert/strict"
import app from "../app.js"
import supertest from "supertest"
import user from "../models/user.js"
import sendMail from "../utilHelpers/mailService.js"


const api = supertest(app)

describe("Tests for User Functionality",() => {
    const newUser = {
            username:"engrtemidayo2017@gmail.com",
            name:"Temidayo Adeyemi",
            password:"My$elf2015"
        }

    test("get all users", async () => {
        await api.get("/api/users/")
        .expect(200)
        .expect("Content-Type",/application\/json/)
    })
    test("add a user", async () => {
        await user.deleteMany({})
        await api.post("/api/users/add")
        .send(newUser)
        .expect(201)
        .expect("Content-Type",/application\/json/)
        const newlyAddedUser = await user.find({})
        assert.strictEqual(newlyAddedUser.length,1)

    })
    test("username is unique",async () => {
        await api.post("/api/users/add")
        .send(newUser)
        .expect(400)
        .expect("Content-Type",/application\/json/)
    })
    test("can send email",  () => {
            sendMail("engrtemidayo2017@gmail.com")
    })
    test("user can login", async () => {
        await api.post("/api/users/login")
        .send({username:"engrtemidayo2017@gmail.com",password:"My$elf2015"})
        .expect(200)
        .expect("Content-Type",/application\/json/)
    })
})

