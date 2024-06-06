import fs from 'fs';


export const createFile = (req, res) => {

    const fileName = 'RateFile.xlxs';
    const fileContent = 'Data Insert';
    fs.writeFile(fileName, fileContent, (err) => {
        if (err) {
            console.error('Error creating file:', err);
            res.status(500).send('Error creating file');
        } else {
            console.log('File created successfully:', fileName);
            res.status(200).send('File created successfully');
        }
    });
};




