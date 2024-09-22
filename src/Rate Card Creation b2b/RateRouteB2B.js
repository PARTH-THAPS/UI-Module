import express from 'express';
import { RateControllerB2B } from './RateControllerB2B.js';

export const b2bRouter= express.Router();

b2bRouter.post('/upload',RateControllerB2B.uploadFile);