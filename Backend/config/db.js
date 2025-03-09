import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const URL=process.env.DB_URL
const ConnDB=async()=>{
    try{
        await mongoose.connect(URL)
        console.log('connected successfull')
    }
    catch (error){
        console.log('connection failed',error)
    }
}
export default ConnDB