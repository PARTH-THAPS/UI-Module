import express from "express";
import { nonLargeController } from "./nonLargeController.js";

export const nonLargeRoute = express.Router();

nonLargeRoute.get('/index', (req, res) => {
    res.render('nonLarge', { userEmail: req.session.userEmail });
});

nonLargeRoute.post('/upload', (req, res) => {
    nonLargeController.uploadFile(req, res);
});



nonLargeRoute.get('/download-csv/client-state-tax',(req,res)=>{
    nonLargeController.DownloadFile(req,res);
});

export default nonLargeRoute;
