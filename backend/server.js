import http from 'http'
import app from "./app.js"
import { Server } from 'socket.io'
import {config} from "./utilHelpers/config.js"
const PORT = config.PORT
const server = http.createServer(app)

server.listen(PORT,"0.0.0.0",() => {
    console.log(`server started on ${PORT}`)
})

