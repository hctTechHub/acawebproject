import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username Is Required"],
        unique:true,
        minLength:[6,"Username Cannot Be Less Than 6 Characters Long"]
    },
    name:{
        type:String,
        required:[true,"Name Field Is Required"]
    },
    password:{
        type:String,
        required:[true,"Password Is Required"],
        minLength:[6,"Username Cannot Be Less Than 6 Characters Long"],
        validate:{
            validator: function(password){
                return /[A-Z]/.test(password) &&
             /\d/.test(password) &&
             /[!@#$%^&*(),.?":{}|<>]/.test(password);
            }
        },
        message:"Password must contain at least one Uppercase character, one number and one speacial character"
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role"
    }
})

userSchema.set("toJSON",{
    transform: (object,returnedObject) => {
            returnedObject.id = returnedObject._id.toString()
            delete returnedObject._id
            delete returnedObject.__v

    }
})

const User = mongoose.model("User",userSchema)

export default User