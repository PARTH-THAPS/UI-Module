import express from 'express';
import { RateController } from './RateController.js';

const RateRouter = express.Router();

RateRouter.get('/', RateController.FormUI);
RateRouter.get('/LargeRateCard', RateController.LargeRateCardUI);

RateRouter.post('/LargeRateCard', async (req, res) => {
    try {
        const ratesController = new RateController();
        await ratesController.modelSend(req, res);
    } catch (error) {
        console.error("Error in LargeRateCard POST route:", error);
        res.status(500).send("Internal Server Error");
    }
});

export { RateRouter };
