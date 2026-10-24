import "dotenv/config"
let config = {
    "PORT": process.env.PORT || 3000,
    "connStr": process.env.NODE_PRODUCTION === "production" ? process.env.MONGO_URI : process.env.TEST_MONGO_URI
}

export {config}