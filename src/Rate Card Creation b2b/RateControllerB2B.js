import excelToJson from 'convert-excel-to-json';
import { upload } from '../File controller/FileUpload.js';
import fs from 'fs';
import { parse } from 'json2csv';
import path from 'path';

export class RateControllerB2B {
  static uploadFile = async (req, res) => {
    upload.single('document')(req, res, async (err) => {
      if (err) {
        return res.status(401).json({ message: 'Error uploading file' });
      } else {
        try {
          const filePath = `uploads/${req.file.filename}`;

          const excelData = excelToJson({
            sourceFile: filePath,
            header: {
              rows: 1
            }
          });

          const sheetName = 'RCM_FREIGHT_CHARGES';
          const sheetData = excelData[sheetName];

          if (!sheetData || !sheetData.length) {
            throw new Error(`No data found in sheet ${sheetName}`);
          }

          const originalHeaders = Object.keys(sheetData[0]);

          // Log data and headers
          console.log('Sheet Data:', sheetData);
          console.log('Original Headers:', originalHeaders);

          const transformedData = transformData({ RCM_FREIGHT_CHARGES: sheetData });
          const csvFilePath = `uploads/${req.file.filename}.csv`;

          // Convert JSON to CSV and save it
          jsonToCsv(transformedData, csvFilePath, originalHeaders);

          // Send the CSV file as a response
          res.sendFile(path.resolve(csvFilePath), (err) => {
            if (err) {
              console.log('Error sending CSV file:', err);
              res.status(500).json({ message: 'Error sending CSV file' });
            } else {
              fs.unlink(csvFilePath, (err) => {
                if (err) console.log('Error deleting file:', err);
              });
            }
          });
        } catch (err) {
          console.log('Error processing file:', err);
          res.status(500).json({ message: 'Error processing file' });
        }
      }
    });
  };
}

// Direction lists
const EAST = ["EAST1", "EAST2"];
const WEST = ["WEST1", "WEST2", "CENTRAL1", "CENTRAL2"];
const NORTH = ["NORTH1", "NORTH2", "NORTH3", "NORTH4"];
const SOUTH = ["SOUTH1", "SOUTH2", "SOUTH3", "SOUTH4"];
const NORTHEAST = ["NORTHEAST1", "NORTHEAST2"];

const directionLists = { EAST, WEST, NORTH, SOUTH, NORTHEAST };

function generateCombinations(entry) {
  const { B, ...rest } = entry;
  let newEntries = [];
  const parts = B.split('_');

  function replacePlaceholders(directions, index = 0, currentCombination = []) {
    if (index === directions.length) {
      const newB = currentCombination.join('_') + '_SURFACE';
      newEntries.push({ ...rest, B: newB });
      return;
    }

    const direction = directions[index];
    const values = directionLists[direction] || [direction];

    values.forEach(value => {
      replacePlaceholders(directions, index + 1, [...currentCombination, value]);
    });
  }

  const directionPlaceholders = parts.filter(part => directionLists.hasOwnProperty(part));

  if (directionPlaceholders.length > 0) {
    replacePlaceholders(directionPlaceholders);
  } else {
    newEntries.push(entry);
  }

  return newEntries;
}

function transformData(data) {
  let newData = [];
  if (data.RCM_FREIGHT_CHARGES) {
    data.RCM_FREIGHT_CHARGES.forEach((entry) => {
      const combinations = generateCombinations(entry);
      newData = newData.concat(combinations);
    });
  }
  return { RCM_FREIGHT_CHARGES: newData };
}

function jsonToCsv(jsonData, filePath, headers) {
  const rows = jsonData.RCM_FREIGHT_CHARGES;
  const csv = parse(rows, { fields: headers });
  fs.writeFileSync(filePath, csv);
}