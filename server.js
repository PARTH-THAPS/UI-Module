import { render } from './render.js'; 
import express from 'express';
import fs from 'fs';
import xlsx from 'xlsx';
import path from 'path';
import multer from 'multer';
import ejsLayout from 'express-ejs-layouts';
import {uatRouter } from './src/UAT/UatRoute.js';
import {RateRouter} from './src/RateCreationLarge/RateRoute.js'
import {non_large_router} from "./src/Rate Card Creation Non Large/NonLargeRoutes.js";
import {uatLargeRouter} from "./src/UAT Large/UatRouteLarge.js"



const server = express();
server.use(express.urlencoded({extended:true})); 
server.use(express.json());

server.set('view engine', 'ejs');
server.set('views', path.join('src', 'views'));
server.use(ejsLayout);

server.use(express.static('src/views'));

server.use('/Public', express.static(path.join('Public')));

import {createFile} from './src/File controller/createExcelFile.js';
import {upload} from './src/File controller/FileUpload.js';

let randomInteger = render();
console.log("Random Integer:", randomInteger);


server.get('/',(req,res)=>{
res.render('form');
})

server.post('/upload',upload);

server.use('/api/UAT/',uatRouter);

server.use('/api/RateCard/',RateRouter);

server.post('/create',upload);

server.get('/create',(req,res)=>{
    res.render('form');
});

server.get('/addFile',createFile);

server.use('/api/RateCardn/',non_large_router);
server.use('/api/LargeUAT/',uatLargeRouter);

const PORT = 3030;
server.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
