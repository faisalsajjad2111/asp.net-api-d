import Tour from "../models/Tour.js"

export const createTour  = async(req, res)=> {
    const newTour=new Tour(req.body);
    try{
        const savedTour = await newTour.save();
        res
        .status(200)
        .json({
            success: true,
            message: "Succesfully created",
            data: savedTour,
        });
    }catch(err){
        res
        .status(500)
        .json({success:false ,message:"Failed to create try again"});
    }
};
export const updateTour = async(req ,res)=>{
const id = req.params.id
try{
    const updatedTour = await Tour.findByIdAndUpdate(id ,{
 $set:req.body,
    },{new:true});
    res.status(200).json({
        success:true,
        message:"Succeffully updated",
        data:updatedTour,
    });
} catch (err){
    res.status(500).json({
        success:false,
        message:"failed to updated",
    

    });
}
};
export const deleteTour = async(req ,res)=>{
    const id = req.params.id;
    try{
        const deletedTour =await Tour.findByIdAndDelete(id);
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
export const getSingleTour = async(req ,res)=>{
    const id = req.params.id;
    try{
        const tour =await Tour.findById(id).populate("reviews");
        res.status(200).json({
            success:true,
            message:"successfully fetched",
            data:tour
        });
    }catch(err){
        res.status(500).json({
            success:false,
            message:"failed to fetch",
        });
    }
};
export const getAllTour = async(req ,res)=>{
    try{
        const tours =await Tour.find({});
        res.status(200).json({
            success:true,
            message:"successfully ",
            data:tours
        });
    }catch(err){
        res.status(404).json({
            success:false,
            message:"not found",
        });
    }
};
export const getTourBySearch = async(req ,res)=>{
    
        const city = new RegExp(req.query.city ,"i");
        const distance = parseInt(req.query.distance);
        const maxGroupSize = parseInt(req.query.maxGroupSize);
        try{
            const tours = await Tour.find({
                city,
                distance:{$gte:distance},
                maxGroupSize:{$gte:maxGroupSize}
            });
        

        res.status(200).json({
            success:true,
            message:"successfully ",
            data:tours
        });
    }catch(err){
        res.status(404).json({
            success:false,
            message:"not found",
        });
    }
};

export const getTourCount = async(req ,res)=>{
    try{
        const tourCount =await Tour.estimatedDocumentCount();
        res.status(200).json({
            success:true,
            data:tourCount
        });
    }catch(err){
        res.status(500).json({
            success:false,
            message:"failed to fetch",
        });
    }
};
export const getFeaturedTour = async(req ,res)=>{
    try{
        const tours =await Tour.find({featured:true}).limit(8)   ;
        res.status(200).json({
            success:true,
            message:"successfull",
            data:tours,
        });
    }catch(err){
        res.status(404).json({
            success:false,
            message:"not found",
        });
    }
};