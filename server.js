import { render } from './render.js'; 
import express from 'express';
import session from 'express-session';
import ejsLayout from 'express-ejs-layouts';
import multer from 'multer';
import fs from 'fs';
import xlsx from 'xlsx';
import path from 'path';
import {auth} from './src/middlewares/auth.middleware.js';
import {uatRouter } from './src/UAT/UatRoute.js';
import {RateRouter} from './src/RateCreationLarge/RateRoute.js'
import {non_large_router} from "./src/Rate Card Creation Non Large/NonLargeRoutes.js";
import {uatLargeRouter} from "./src/UAT Large/UatRouteLarge.js"
import {uatb2bRouter} from "./src/B2B UAT/uatb2bRouter.js"
import userRouter from "./src/Users/userRoutes.js"
import {connectUsingMongoose} from "./src/Config/mongoose.js";
import {nonLargeRoute} from "./src/NON LARGE/nonLargeRoute.js"
import cookieParser from 'cookie-parser';
import {setLastVisit} from './src/middlewares/lastVisit.middlewares.js';
import {loggerMiddleware} from './src/middlewares/logger.middleware.js'
import {logger} from './src/middlewares/logger.middleware.js';
import { ApplicationError } from './src/error-handler/applicationError.js';
import status from 'express-status-monitor';
import { b2bRouter } from './src/Rate Card Creation b2b/RateRouteB2B.js';
import cors from "cors";
import {Server} from 'socket.io';
import http from "http";
import { chatModel } from './src/Chat Bot/chat.schema.js';
import { timeStamp } from 'console';
 



const app = express();

app.use(express.urlencoded({extended:true})); 
app.use(express.json());
//cookie parser will put the res which is sent from app to client in req of client
app.use(cookieParser())
// app.use(setLastVisit);

//session middlewares
app.use(session({
    secret: 'VeryLongSecretKey', 
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false // Set to true in production with HTTPS
    }
}));

//to check the status of express app
app.use(status());

app.use(loggerMiddleware);

app.use((err,req,res,next)=>{

    if(err instanceof ApplicationError){
        res.status(err.code).send(err.message);
    }

    logger.info(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(503).send('something went wrong, please try later');
});

app.set('view engine', 'ejs');
app.set('views', path.join('src', 'views'));
app.use(ejsLayout);
app.use(express.static('src/views'));
app.use('/Public', express.static(path.join('Public')));



let randomInteger = render();
console.log("Random Integer:", randomInteger);


//cache


app.use('/api/user/',userRouter);

//
app.get('/',auth,(req,res)=>{{userEmail:req.session.userEmail}
res.render('form',);
})

app.use('/api/UAT/',auth,uatRouter);

app.use('/api/RateCard/',auth,RateRouter);

app.get('/create',auth,(req,res)=>{
    res.render('form',{userEmail:req.session.userEmail});
});

app.use('/api/RateCardnonLarge/',auth,non_large_router);
app.use('/api/LargeUAT/',auth,uatLargeRouter);
app.use('/api/b2bUAT/',auth,uatb2bRouter);
app.use('/api/nonlarge/',auth,nonLargeRoute);
app.use('/api/b2bRateCard/',auth,b2bRouter);



const httpApp =http.createServer(app);
const io = new Server(httpApp, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log("Connection established:", socket.id);

    
    socket.on('join', (username) => {
        socket.username = username; 
        console.log(`${username} has joined the chat.`);
        chatModel.find().sort({timestamp:1}).limit(50).then((message)=>{
            socket.emit('load_messages',message);
        }).catch((err)=>{
            console.log(err);
        });

    });

    // Handle new messages
    socket.on('new_message', (message) => {
        const userMessage = {
            username: socket.username || "Anonymous", // Fallback to "Anonymous"
            message: message
        };
       const newChat= new chatModel({
        username:socket.username,
        message:message,
        timestamp:new Date()
       });
       newChat.save();


        socket.broadcast.emit('broadcast_message', userMessage); // Send to all clients except the sender
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log("Connection disconnected:", socket.id);
    });
});



const PORT =process.env.PORT || 3030;
httpApp.listen(PORT, () => {
    connectUsingMongoose();
    console.log(`app is listening at http://localhost:${PORT}`);
});
