import User from '../models/User.js'



//update user
export const updateUser = async (req,res) => {

    const {id}=req.params;
    try{

        const updateUser = await User.findByIdAndUpdate(id,{$set:req.body},{new:true});

        res.status(200).json({success:true,message:'successfully updated',data:updateUser});
  

    }catch(err){
        res.status(500).json({success:false,message:'failed to update User'});

    }
}

//delete user
export const deleteUser = async (req,res) => {
    const {id}=req.params;
    try{

        const deleteUser = await User.findByIdAndDelete(id);
        res.status(200).json({success:true,message:'successfully deleted',data:deleteUser});

        

    }catch(err){
        res.status(500).json({success:false,message:'falied to delete user'});

    }
}

//get single user
export const getSingleUser = async (req,res) => {
    const {id}=req.params;
    try{

        const getSingle= await User.findById(id);
        
        res.status(200).json({success:true,message:'successfully fetched single User',data:getSingle});
    }catch(err){
        
        res.status(500).json({success:false,message:'falied to fetch user'});


    }
}

//get all tour
export const getAllUsers = async (req,res) => {

    try{

        const allUsers= await User.find({});
        
        res.status(200).json({success:true,message:'successfully fetched all Users',data:allUsers});
    }catch(err){
        
        res.status(500).json({success:false,message:'falied to fetch all users'});
    }
}