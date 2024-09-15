import { upload } from "../File controller/FileUpload.js";
import excelToJson from 'convert-excel-to-json';
import axios from 'axios';
import {Parser} from 'json2csv';
import fs from "fs";
import { response } from "express";


export class nonLargeController {
    static uploadFile(req, res) {
        upload.single('document')(req, res, (err) => {
            if (err) {
                return res.status(400).send("Error uploading file: " + err.message);
            } else {
                var filePath = "uploads/" + req.file.filename;

                try {
                    const excelData = excelToJson({
                        sourceFile: filePath,
                        header: {
                            rows: 1
                        }
                    });
                    const transformedData = excelData.Sheet1.reduce((acc, item) => {
                        const existingItem = acc.find(el => el.clientCode === item.A);

                        if (existingItem) {
                            if (!existingItem.state.includes(item.C)) {
                                existingItem.state += `, ${item.C}`;
                            }
                        } else {
                            acc.push({
                                clientCode: item.A,
                                state: item.C
                            });
                        }

                        return acc;
                    }, []);

                    axios.post('https://api-sea.fareyeconnect.com/ekart-consumer/public/api/client/add/clientStates', transformedData)
                        .then(response => {
                            console.log("API Response:", response.data);
                            return res.status(200).send("File uploaded and processed successfully.");
                        })
                        .catch(error => {
                            console.error("API Error:", error);
                            return res.status(500).send("Error sending data to API: " + error.message);
                        });

                } catch (error) {
                    return res.status(500).send("Error converting Excel to JSON: " + error.message);
                }
            }
        });
    }

static DownloadFile(req,res)
{
    axios.get('https://api-sea.fareyeconnect.com/ekart-consumer/public/api/client/get/clientStateTax')
    .then(response => {
        const responseData = JSON.stringify(response.data);

        const parser = new Parser();
        const csv = parser.parse(response.data);

        fs.writeFileSync('./data.csv', csv);

        res.download('./data.csv', 'data.csv', (err) => {
            if (err) {
                console.error("Error downloading file:", err);
                return res.status(500).send("Error downloading file: " + err.message);
            } else {
                console.log("File downloaded successfully.");
              
                fs.unlinkSync('./data.csv');
            }
        });
    })
    .catch(error => {
        console.error("API Error:", error);
        return res.status(500).json({ status: "Error while executing the API" });
    });



}


}
