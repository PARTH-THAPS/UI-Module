import fs from 'fs';
import winston from 'winston';


const fsPromises = fs.promises;

// export async function log(logData) {
//   try {

// if(!req.url.includes('login')){

//     logData = `\n${new Date().toString()} - ${logData}`;
//     await fsPromises.appendFile("log.txt", logData);
// }

//   } catch (err) {
//     console.error('Error writing to log file:', err);
//   }
// }


export const logger=winston.createLogger({
    level:'info',
    format:winston.format.json(),
    defaultMeta:{service:'request-logging'},
    transports:[new winston.transports.File({filename:'logs.txt'})]
});

export const loggerMiddleware = async (req, res, next) => {

if(!req.url.includes('login')){
  const logData = `${req.url} - ${JSON.stringify(req.body)}`;
  logger.info(logData);
}
 
  next();
};
