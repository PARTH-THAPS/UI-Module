import express from 'express';
import { NonLargeRateController } from "./NonLargeRateController.js";

export const non_large_router = express.Router();

non_large_router.get('/rate_card_creation', (req, res) => {
    res.render("NonLargeRate",{userEmail:req.session.userEmail});
});

non_large_router.post('/nonLargeRateCard', async (req, res) => {
    try {
        const rateController = new NonLargeRateController();
        await rateController.RateCardCreation(req, res);
    } catch (error) {
        console.error("Error in nonLargeRateCard route:", error);
        res.status(500).send("Internal Server Error");
    }
});
