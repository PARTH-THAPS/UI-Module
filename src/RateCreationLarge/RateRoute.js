import express from 'express';
import { RateController } from './RateController.js';


const server = express();
const RateRouter = express.Router();


RateRouter.get('/',RateController.FormUI);
RateRouter.get('/LargeRateCard',RateController.LargeRateCardUI)
RateRouter.post('/LargeRateCard',RateController.modelSend);



export {RateRouter};
