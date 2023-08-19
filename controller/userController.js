import User from "../models/User.js"

export const createUser  = async(req, res)=> {
    const newUser=new User(req.body);
    try{
        const savedUser = await newUser.save();
        res
        .status(200)
        .json({
            success: true,
            message: "Succesfully created",
            data: savedUser,
        });
    }catch(err){
        res
        .status(500)
        .json({success:false ,message:"Failed to create try again"});
    }
};
export const updateUser = async(req ,res)=>{
const id = req.params.id
try{
    const updatedUser = await User.findByIdAndUpdate(id ,{
 $set:req.body,
    },{new:true});
    res.status(200).json({
        success:true,
        message:"Succeffully updated",
        data:updatedUser,
    });
} catch (err){
    res.status(500).json({
        success:false,
        message:"failed to updated",
    

    });
}
};
export const deleteUser = async(req ,res)=>{
    const id = req.params.id;
    try{
        const deletedUser =await User.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"successfully deleted"
        });
    }catch(err){
        res.status(500).json({
            success:false,
            message:"failed to delete",
        });
    }
};
export const getSingleUser = async(req ,res)=>{
    const id = req.params.id;
    try{
        const User =await User.findById(id);
        res.status(200).json({
            success:true,
            message:"successfully fetched"
        });
    }catch(err){
        res.status(500).json({
            success:false,
            message:"failed to fetch",
        });
    }
};
export const getAllUser = async(req ,res)=>{
    try{
        const Users =await User.find({});
        res.status(200).json({
            success:true,
            message:"successfully ",
            data:Users
        });
    }catch(err){
        res.status(404).json({
            success:false,
            message:"not found",
        });
    }
};