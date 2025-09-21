import Review from "../models/Review.js";
import Tour from "../models/Tour.js";


export const createReview = async (req,res) => {

    const tourId=req.params.tourId;

    const newReview = new Review({...req.body})

    try{
         const savedReview = await  newReview.save();

         //after creating new review update review array in tour
         await Tour.findByIdAndUpdate(tourId, {
            $push:{reviews:savedReview._id}
         })

         res.status(200).json({success:true,message:'review submitted successfuly', data:savedReview})


    }catch(err){
        res.status(400).json({success:false,message:'review falied'})
    }
}