import TweetService from '../../services/TweetService';
import { formatTweets } from '../../system/helpers/format';
import { rankingTweets } from '../../system/helpers/rank';
import { sortTweetsByCreatedAt } from '../../system/helpers/sort';

/* eslint-disable camelcase */
export default class TweetController {
  static async getTweets(req, res) {
    const { user_id, type, phrase, hashtag } = req.query;
    try {
      const tweets = await TweetService.findAll(user_id);
      const sortByDate = sortTweetsByCreatedAt(tweets);
      const rankedTweets = rankingTweets(
        sortByDate,
        type,
        phrase,
        hashtag,
      );
      const results = formatTweets(rankedTweets);

      return res.status(200).send(results);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}
