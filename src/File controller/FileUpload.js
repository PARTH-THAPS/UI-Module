import multer from "multer";
import express from "express";
import path from "path";
import { PythonShell } from 'python-shell';

const server = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join('File');
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload1 = multer({ storage: storage });

export const upload = (req, res) => {
    upload1.single('document')(req, res, (err) => {
        if (err) {
            return res.status(400).send("Error uploading file." + err);
        }
        
        // Get the uploaded file path
        const uploadedFilePath = path.join('File', req.file.filename);

        const options = {
            mode: 'text',
            pythonPath: 'python3', 
            pythonOptions: ['-u'], 
            scriptPath: './Public/Script/',
            args: [uploadedFilePath] 
        };

        PythonShell.run('consolidate.py', options, (err, results) => {
            if (err) {
                return res.status(500).send("Error running Python script." + err);
            }
            console.log("Python script results:", results);
            res.send("Success");
        });
    });
};

server.post('/upload', upload);

export default server;
