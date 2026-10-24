import express from "express"
import mongoose from "mongoose"
import dbConn from "./utilHelpers/dbConn.js"
import userRouter from "./controllers/userRouter.js"
import categoryRouter from "./controllers/categoryRouter.js"
import articleRouter from "./controllers/articleRouter.js"
import invalidRouteHandler from "./middleware/invalidRouteHandler.js"
import authMiddleware from "./middleware/AuthenticationHandler.js"
import errorHandler from "./middleware/errorHandler.js"
import path from "path"
import cors from "cors"
const app = express()
await dbConn() //wait for db connection
app.use(express.json())
app.use(cors())
app.use("/uploads",express.static(path.join(process.cwd(),"uploads")))
app.use("/api/users",userRouter)
app.use("/api/users",categoryRouter)
app.use("/api/users",articleRouter)
app.use(invalidRouteHandler)
app.use(errorHandler)

export default app