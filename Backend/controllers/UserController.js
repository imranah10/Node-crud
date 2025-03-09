import user from "../models/users.model.js";
// create 
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
        if(!User){
            return res.status(404).json({success:false,message:"No user found"})
        }
        res.status(200).json({success:true,User})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"internal server error"})
    }

}
// Update User
const Updateuser = async (req, res) => {
  try {
    const userId = req.params.id; 
    console.log("User ID:", userId);

    const updateuser = await user.findByIdAndUpdate(userId, req.body, { new: true });

    if (!updateuser) {
      return res.status(404).json({ success: false, message: "No user found" });
    }

    res.status(200).json({ success: true, updateuser });
  } catch (error) {
    console.log("Error in Updateuser:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// delete user 
const Deleteuser=async(req,res)=>{
  try {
    const userId=req.params.id;
    const deleteduser=await user.findByIdAndDelete(userId);
    if(!deleteduser){
      return res.status(404).json({success:false,message:"user not found"})
    }
    res.status(200).json({success:true,message:"user deleted successfully"})
  } catch (error) {
    console.log("Error in Updateuser:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}

//
export { Createuser, Getuser, Updateuser,Deleteuser};
