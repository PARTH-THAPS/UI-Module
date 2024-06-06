import express from 'express';
import { uatControllerLarge } from './uatControllerLarge.js';


const server = express();
const uatLargeRouter = express.Router();


uatLargeRouter.get('/', uatControllerLarge.formCollect);



uatLargeRouter.post('/SubmitData', uatControllerLarge.submitData);

export { uatLargeRouter };
