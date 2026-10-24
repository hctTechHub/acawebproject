import http from 'http'
import app from "./app.js"
import { Server } from 'socket.io'
import {config} from "./utilHelpers/config.js"
const PORT = config.PORT
const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:'http://localhost:5173'
    }
})
io.on("connection",(socket) => {
    //console.log("client connected:",socket.id)
    socket.on("disconnected",() => {
        console.log("client disconnected",socket.id)
    })
})

server.listen(PORT,"0.0.0.0",() => {
    console.log(`server started on ${PORT}`)
})

export {io}
