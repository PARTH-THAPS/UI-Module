import express from 'express';
import { uatController } from './uatController.js';


const server = express();
const uatRouter = express.Router();


uatRouter.get('/', uatController.formCollect);


uatRouter.post('/SubmitData', uatController.submitData);

export { uatRouter };
