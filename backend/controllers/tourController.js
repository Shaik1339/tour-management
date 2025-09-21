import Tour from '../models/Tour.js'

//create a new tour
export const createTour = async (req,res) => {

    const newTour = new Tour(req.body);
    try{
        const savedTour= await newTour.save();
        res.status(201).json({success:true,message:'successfully created',data:savedTour})

    }catch(err){
        res.status(500).json({success:false,message:'falied to create ,try again'});

    }
}

//update tour
export const updateTour = async (req,res) => {

    const {id}=req.params;
    try{

        const updateTour = await Tour.findByIdAndUpdate(id,{$set:req.body},{new:true});

        res.status(200).json({success:true,message:'successfully updated',data:updateTour});
  

    }catch(err){
        res.status(500).json({success:false,message:'failed to update tour'});

    }
}

//delete tour
export const deleteTour = async (req,res) => {
    const {id}=req.params;
    try{

        const deleteTour = await Tour.findByIdAndDelete(id);
        res.status(200).json({success:true,message:'successfully deleted',data:deleteTour});

        

    }catch(err){
        res.status(500).json({success:false,message:'falied to delete tour'});

    }
}

//get single tour
export const getSingleTour = async (req,res) => {
    const {id}=req.params;
    try{

        const getSingle= await Tour.findById(id);
        
        res.status(200).json({success:true,message:'successfully fetched single tour',data:getSingle});
    }catch(err){
        
        res.status(500).json({success:false,message:'falied to fetch tour'});


    }
}

//get all tour
export const getAllTours = async (req,res) => {

    //for pagination
    const page = parseInt(req.query.page);

    console.log(page)
    try{

        const allTours= await Tour.find({}).skip(page * 8).limit(8);
        
        res.status(200).json({success:true,message:'successfully fetched all tour',data:allTours});
    }catch(err){
        
        res.status(500).json({success:false,message:'falied to fetch all tour'});
    }
}

//get tours by search 

export const getToursBySearch = async (req,res) => {
    const city = new RegExp(req.query.city,'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);
    try{
        // const searchTours= await Tour.find({$and:[{city:city},{distance:distance},{maxGroupSize:maxGroupSize}]})
        const searchTours= await Tour.find({city,distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}})
        res.status(200).json({success:true,message:'successfully fetched search tours',count:searchTours.length,data:searchTours});
    

    }catch(err){

        res.status(500).json({success:false,message:'falied to fetch search tours'});

    }
}

//get featured tours
export const getFeaturedTours = async (req,res) => {

    try{

        const featuredTours= await Tour.find({featured:true}).limit(8);
        
        res.status(200).json({success:true,message:'successfully fetched featured tours',data:featuredTours});
    }catch(err){
        
        res.status(500).json({success:false,message:'falied to fetch featured tours'});
    }
}


export const getTourCount =async (req,res) => {

    try{
        const tourCount = await Tour.estimatedDocumentCount();

      res.status(200).json({success:true,data:tourCount});
    }catch(err){
        
        res.status(500).json({success:false,message:'falied to fetch count of tours'});

    }
}