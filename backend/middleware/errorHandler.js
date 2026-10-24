

const errorHandler = (error,request,response,next) => {
    if(error === "TokenExpiredError"){
        return response.status(400).json({error:"Token Expired Error"})
    }
    if(error === "JsonWebTokenError"){
        return response.status(400).json({error:"Invalid Token"})
    }

    next(error)
}


export default errorHandler