import { Router } from 'express';
import TweetController from '../controllers/TweetController';

const router = Router();

router.get('/', TweetController.getAllTweets);

export default router;
