import express from 'express';
import { uatControllerb2b } from './uatControllerb2b.js';


const server = express();
const uatb2bRouter = express.Router();


uatb2bRouter.get('/', uatControllerb2b.formCollect);



uatb2bRouter.post('/SubmitData', uatControllerb2b.submitData);

export { uatb2bRouter };
