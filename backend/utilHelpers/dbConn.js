import mongoose from "mongoose"
import {config} from "../utilHelpers/config.js"
import logger from "../utilHelpers/logger.js"
const connStr = config.connStr
const  dbConn = async () => {
    try{

    await mongoose.connect(connStr,{family:4})
        logger.INFO("Database Connected!!!")
    }
    catch(error){
        logger.ERROR(`Database Connection Failed ${error}`)
    }
}


export default dbConn