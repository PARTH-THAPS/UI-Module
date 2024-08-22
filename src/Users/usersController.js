import { userRepository } from './usersRepository.js';
import jwt from 'jsonwebtoken';

export default class UserController {
    constructor() {
        this.UserRepository = new userRepository();
    }
    static async login(req, res, next) {
        try {
            const { emailId, password } = req.body;
            const user = await userRepository.loginUser(req.body);
            if (user) {
                req.session.userEmail = emailId; 
                res.render('layout', { body: '<p>Welcome, ' + emailId + '! <br>   Note:This tool will ease up your work </p>',userEmail:req.session.userEmail});
                const token=jwt.sign({email:emailId},'JA1WIvwXL8RQi6iy7LbiBROWynG6IBsS',{expiresIn:"3h"});
            } else {
                res.status(401).json({ status: "error", message: "Invalid credentials" }); // Send failure response
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "error", message: "Internal server error" }); // Handle server error
        }
    }


    static logout(req,res){
req.session.destroy((err)=>{
    if(err){
console.log(err);
        }
        else{
            res.redirect('/api/user/login');
        }
    })

    res.clearCookie('lastVisit');
        }

    static resetPassword=(req,res)=>{
    const {newPassword,email}=req.body;
    try{
        userRepository.resetPassword(newPassword,email);
    }
   catch(error)
   {


   }
}
}
