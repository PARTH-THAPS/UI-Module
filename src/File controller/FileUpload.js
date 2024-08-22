import multer from "multer";
import express from "express";
import path from "path";

const server = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       return cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

export const upload = multer({ storage:storage });



export default server;
