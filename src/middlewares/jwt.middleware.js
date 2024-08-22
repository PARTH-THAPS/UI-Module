import jwt from 'jsonwebtoken';

export const jwtauth=(req,res,next)=>{
//read the token
    const token=req.headers["authorization"];

//if token is not there return error
if(!token)
{
    res.status(401).send("Unauthorized");

        }

        //check if token is valid
        try{
      const payload=jwt.verify(token,'JA1WIvwXL8RQi6iy7LbiBROWynG6IBsS');
    }
    catch(error){
        res.status(401).send("Unauthorized");
    }

    next();
}

