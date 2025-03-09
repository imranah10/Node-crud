import user from "../models/users.model.js";
const Createuser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const NewUser = new user({
      name,
      email,
      phone,
    });
    await NewUser.save();
    res
      .status(200)
      .json({ success: true, message: "User created successfully", NewUser });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "internal server error", NewUser });
  }
};
// read api 
const Getuser=async(req,res)=>{
    try {
        const User=await user.find()
        if(!user){
            return res.status(404).json({success:false,message:"No user found"})
        }
        res.status(200).json({success:true,User})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"internal server error"})
    }

}

export { Createuser,Getuser };
