import User from '../Model/userModel.js'

export const create = async(req,res)=>{
    try {
        const userData = new User(req.body);
        if(!userData){
            return res.status(404).json({msg:"User Data Not Found"});

        }
        const saveData = await userData.save();
        // res.status(200).json({msg: "User created successfully. "+saveData});
  
        res.status(200).json({ msg: "User created successfully", data: saveData });

    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const getAll = async(req,res)=>{
    try {
        const userData = await User.find();
        if(!userData){
            return res.status(404).json({msg:"User Data Not Found"});

        }
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const getOne = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg: "User Not found"})
        }
        res.status(200).json(userExist)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const update = async(req,res)=>{
     const id = req.params.id;
     const useExist = await User.findById(id);
     if(!useExist){
        return res.status(404).json({msg:"User not found"})
     }
     const updateData = await User.findByIdAndUpdate(id,req.body, {new:true})
    //  res.status(200).json(updateData);
     res.status(200).json({ msg: "User Update successfully", data: updateData });
    try {
        
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id;
        const deleteUser = await User.findById(id);
        if(!deleteUser){
            return res.status(404).json({msg: "user not found"})
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"User delete successfully"})
    } catch (error) {
        res.status(500).json({error:error})
    }
}