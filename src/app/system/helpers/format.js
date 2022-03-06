/**
 * @author Celestin N.
 * @param {array} tweets Array of tweets
 * @returns Formatted text
 */
export const formatTweets = (tweets) => {
  let results = 'TeamCoolCloud,1234-0000-0001';
  if (tweets && tweets.length) {
    tweets.forEach((tweet) => {
      results = `
            ${results}<br/>
            ${tweet.user.id}&emsp;
            ${tweet.user.screen_name}&emsp;
            ${tweet.user.description}&emsp;
            ${tweet.text}&emsp;
            ${tweet.finalScore}
          `;
    });
  }
  return results;
};
