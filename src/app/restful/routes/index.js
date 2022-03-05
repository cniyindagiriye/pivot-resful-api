import { Router } from 'express';
import tweetRoute from './_tweet';

const API_VERSION = process.env.API_VERSION || 'v1';
const url = `/api/${API_VERSION}`;
const router = Router();

router.use(`${url}/tweets`, tweetRoute);

export default router;
