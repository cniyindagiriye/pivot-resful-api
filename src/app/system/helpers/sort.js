/**
 *
 * @param {Array} tweets
 * @returns array of tweets form latest
 */
export const sortTweetsByCreatedAt = (tweets) => {
  if (tweets && tweets.length) {
    return tweets.sort(
      (first, second) =>
        new Date(second.created_at) - new Date(first.created_at),
    );
  }
  return tweets;
};
