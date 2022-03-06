import { Op } from 'sequelize';
import { Tweet, User } from '../database/models';

export default class TweetService {
  static createTweet(newTweet) {
    return Tweet.create(newTweet);
  }

  /**
   *
   * @param {Number} userId user id
   * @returns Get all replies or retweets to the given user
   */
  static findAll(userId) {
    return Tweet.findAll({
      where: {
        [Op.or]: [
          { in_reply_to_user_id: userId },
          { 'retweeted_status.user.id': userId },
        ],
      },
      include: { model: User, as: 'user' },
    });
  }

  static findByPk(id) {
    return Tweet.findByPk(id);
  }

  static updateTweet(set, conditon) {
    return Tweet.update(set, {
      where: conditon,
    });
  }

  static destroyTweet(condition) {
    return Tweet.destroy({
      where: condition,
    });
  }
}
