import express from 'express';
import {userRepository} from './usersRepository.js';
import UserController from "./usersController.js"

const userRouter = express.Router();

userRouter.get('/register', userRepository.renderPage);


userRouter.get('/login', userRepository.getLogin);

userRouter.get('/logout',(req,res)=>{
    UserController.logout(req,res);
})

userRouter.post('/add/user', async (req, res) => {
    try {
        const result = await userRepository.signUp(req.body); 
        res.render('login');
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
});

userRouter.post('/login/user',(req, res) => {
    UserController.login(req,res);
});

userRouter.put('/resetPassword',(req,res)=>{
    UserController.resetPassword(req,res);
})

export default userRouter;
