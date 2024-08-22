import mongoose from 'mongoose';
import { userSchema } from './userSchema.js';

const userModel = mongoose.model('User', userSchema); 

export class userRepository {
    static renderPage(req, res) {
        res.render('register');
    }

    static getLogin(req, res) {
        res.render('login'); 
    }

    static async signUp(userData) {
        try {
            console.log(userData);
            const newUser = new userModel(userData); // Create a new instance of User model with userData
            await newUser.save(); // Save the new user to the database
        } catch (error) {
            console.error(error);
            throw new Error('Failed to insert user into database'); // Throw an error if user insertion fails
        }
    }
static async resetPassword(email,newPassword)
{
try{
   let user=await userModel.findById(email);
   user.password=newPassword;
   user.save();
}

catch(error)
{

}

}

    static async loginUser(loginData) {
        try {
            const { emailId, password } =loginData; 
            const user = await userModel.findOne({ emailId, password });
            return user;
        } catch (error) {
            console.error(error);
        }
    }
    }


