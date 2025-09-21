import jwt from 'jsonwebtoken'

export const verifyToken = (req,res,next) => {

    const token = req.cookies.accessToken;
    console.log(token);

    if(!token){
        return res.status(401).json({success:true,message:'your are not authorized user'})
    }

    //if token exist verify the token
    jwt.verify(token,process.env.JWT_SECRET, (err,user) => {
        if(err){
            return res.status(401).json({success:true,message:'token is invalid'})
        }
        req.user=user;
        next();
    })
    
}


export const verifyUser = (req,res,next) => {

    verifyToken(req,res,next, () => {
        if(req.user.id===req.params.id || req.user.role==='admin'){
            next();
        }
        else{
          return  res.status(401).json({success:true,message:'you are not authenticated'})
        }
    })
}

export const verifyAdmin = (req,res,next) => {

    verifyToken(req,res,next, () => {
        if(req.user.role==='admin'){
            next();
        }
        else{
           return res.status(401).json({success:true,message:'you are not authorized'})
        }
    })
}