import { Router } from 'express';
import TweetController from '../controllers/TweetController';

const router = Router();

router.get(`/q2`, TweetController.getTweets);

export default router;
