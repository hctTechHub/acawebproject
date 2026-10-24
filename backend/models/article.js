import mongoose from "mongoose"


const  articleSchema = new mongoose.Schema({
    title:{
            type:String,
            required:[true,"Article Title Is Required"]
    },
    category:[
        {
            required:[true,"Article Must Be Assigned To At Least One Category"],
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category"
        }
    ],
    bannerImg:{
        type:String,
        required:[true,"Banner Image Is Required"]
    },
    carouselImages:{
        type:[{}],
    },
    content:{
        type:String,
        required:[true,"Article Content Is Compulsory"]
    },
    isPublished:{
        type:Boolean,
        default:false,
    },
    role:{
        type:String,
    },
    created_at:{
        type:Date,
        default:Date.now,
        required:true,
        get:(date) => {
            date?.toLocaleDateString("en-US",{
                month:"short",
                day:"numeric",
                year:"numeric"
            })
        }
    },
    updated_at:{
        type:Date,
    },
    deleted_at:{
        type:Date,
    },
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
    },
    user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"  
    }

})

articleSchema.set("toJSON",{
    transform:(originalObject,returnedObject) => {
        returnedObject.id = returnedObject._id.toString(),
        returnedObject.created_at = returnedObject.created_at.toLocaleDateString("en-US",{
            month:"short",
            day:"numeric",
            year:"numeric"
        })
        delete returnedObject._id
        delete returnedObject.__v
    },
})
const Article = mongoose.model("Article",articleSchema)

export default Article