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



const server = express();

server.use(express.urlencoded({extended:true})); 
server.use(express.json());
//cookie parser will put the res which is sent from server to client in req of client
server.use(cookieParser())
// server.use(setLastVisit);

//session middlewares
server.use(session({
    secret: 'VeryLongSecretKey', 
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false // Set to true in production with HTTPS
    }
}));

//to check the status of express server
server.use(status());

server.use(loggerMiddleware);

server.use((err,req,res,next)=>{

    if(err instanceof ApplicationError){
        res.status(err.code).send(err.message);
    }

    logger.info(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(503).send('something went wrong, please try later');
});

server.set('view engine', 'ejs');
server.set('views', path.join('src', 'views'));
server.use(ejsLayout);
server.use(express.static('src/views'));
server.use('/Public', express.static(path.join('Public')));



let randomInteger = render();
console.log("Random Integer:", randomInteger);


//cache


server.use('/api/user/',userRouter);

//
server.get('/',auth,(req,res)=>{{userEmail:req.session.userEmail}
res.render('form',);
})

server.use('/api/UAT/',auth,uatRouter);

server.use('/api/RateCard/',auth,RateRouter);

server.get('/create',auth,(req,res)=>{
    res.render('form',{userEmail:req.session.userEmail});
});

server.use('/api/RateCardnonLarge/',auth,non_large_router);
server.use('/api/LargeUAT/',auth,uatLargeRouter);
server.use('/api/b2bUAT/',auth,uatb2bRouter);
server.use('/api/nonlarge/',auth,nonLargeRoute);
server.use('/api/b2bRateCard/',auth,b2bRouter);


const PORT =process.env.PORT || 3030;
server.listen(PORT, () => {
    connectUsingMongoose();
    console.log(`Server is listening at http://localhost:${PORT}`);
});
