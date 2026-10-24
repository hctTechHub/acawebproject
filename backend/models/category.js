import mongoose from "mongoose"
const categorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:[true,"Category Name Is Required"],
    },
    created_at:Date,
    updated_at:Date,
    deleted_at:Date,
    created_by_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    updated_by_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    deleted_by_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    
})

categorySchema.set("toJSON",{
    transform:(object,returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Category = mongoose.model("Category",categorySchema)

export default Category