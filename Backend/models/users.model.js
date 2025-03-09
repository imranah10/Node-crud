import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    }
},{timestamps:true})
const user=mongoose.model('User',userSchema);
export default user;