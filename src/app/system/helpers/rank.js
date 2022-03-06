/* eslint-disable camelcase */
const excludesHashtags = require('../data/readHashtags');

const tags = excludesHashtags();

const interactionScore = (tweet) => {
  const reply_count = tweet.reply_count || 0;
  const retweet_count = tweet.retweet_count || 0;
  return Math.log(1 + 2 * reply_count + retweet_count);
};
const hashtagScore = (tweet, hashtag = '') => {
  const {
    entities: { hashtags },
  } = tweet;
  if (tags.includes(hashtag)) {
    return 1;
  }
  let count = 0;
  hashtags.forEach((tag) => {
    if (tag.text === hashtag.toLowerCase()) {
      count += 1;
    }
  });
  if (count > 10) {
    return 1 + Math.log(1 + count - 10);
  }
  return 1;
};
const keywordScore = (tweet, type, phrase, hashtag) => {
  let count = 0;
  const getOccurence = (string, word) =>
    string.split(word).length - 1;

  if (
    (type === 'reply' && tweet.in_reply_to_user_id) ||
    (type === 'retweet' && tweet.retweeted_status) ||
    type === 'both'
  ) {
    // coout hashtag occurence
    count += getOccurence(
      tweet.text.toLowerCase(),
      `#${hashtag.toLowerCase()}`,
    );
    count += getOccurence(tweet.text, phrase);
    return 1 + Math.log(count + 1);
  }
  return 0;
};
export const rankingTweets = (tweets, type, phrase, hashtag) =>
  tweets
    .map((tweet) => ({
      ...tweet,
      text: tweet.text,
      finalScore:
        interactionScore(tweet) *
        hashtagScore(tweet, hashtag) *
        keywordScore(tweet, type, phrase, hashtag),
    }))
    .sort((first, second) => second.finalScore - first.finalScore);
