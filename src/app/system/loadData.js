const path = require('path');

const fs = require('fs');

module.exports = () => {
  const lang = ['ar', 'en', 'fr', 'in', 'pt', 'es', 'tr', 'js'];
  const raw = fs
    .readFileSync(path.join(__dirname, '../../query2_ref.txt'))
    .toString();
  const rawData = raw.split('\n');
  const tweets = [];
  const tweetIDs = [];
  const userIDs = [];
  const users = [];
  rawData.forEach((element) => {
    if (element.length > 0 && !tweets.includes(element)) {
      const tweet = JSON.parse(element);

      if (
        tweet.id &&
        tweet.id_str &&
        tweet.created_at &&
        tweet.user.id &&
        tweet.user.id_str &&
        tweet.text &&
        tweet.entities &&
        tweet.entities.hashtags &&
        tweet.entities.hashtags.length > 0 &&
        lang.includes(tweet.lang) &&
        !tweetIDs.includes(tweet.id)
      ) {
        tweetIDs.push(tweet.id);
        const item = {
          created_at: tweet.created_at,
          id_str: tweet.id_str,
          id: tweet.id,
          text: tweet.text,
          source: tweet.source,
          truncated: tweet.truncated,
          in_reply_to_status_id: tweet.in_reply_to_status_id,
          in_reply_to_status_id_str: tweet.in_reply_to_status_id_str,
          in_reply_to_user_id: tweet.in_reply_to_user_id,
          in_reply_to_user_id_str: tweet.in_reply_to_user_id_str,
          in_reply_to_screen_name: tweet.in_reply_to_screen_name,
          userId: tweet.user.id,
          coordinates: JSON.stringify(tweet.coordinates),
          place: JSON.stringify(tweet.place),
          quoted_status_id: tweet.quoted_status_id,
          quoted_status_id_str: tweet.quoted_status_id_str,
          is_quote_status: tweet.is_quote_status,
          quoted_status: JSON.stringify(tweet.quoted_status),
          retweeted_status: JSON.stringify(tweet.retweeted_status),
          quote_count: tweet.quote_count,
          reply_count: tweet.reply_count,
          retweet_count: tweet.retweet_count,
          favorite_count: tweet.favorite_count,
          entities: JSON.stringify(tweet.entities),
          extended_entities: JSON.stringify(tweet.extended_entities),
          favorited: tweet.favorited,
          retweeted: tweet.retweeted,
          possibly_sensitive: tweet.possibly_sensitive,
          filter_level: tweet.filter_level,
          lang: tweet.lang,
          matching_rules: JSON.stringify(tweet.matching_rules),
        };
        tweets.push(item);

        const { user } = tweet;

        if (!userIDs.includes(user.id)) {
          userIDs.push(user.id);

          const userData = {
            id: user.id,
            id_str: user.id_str,
            name: user.name,
            screen_name: user.screen_name,
            location: user.location,
            url: user.url,
            description: user.description,
            protected: user.protected,
            verified: user.verified,
            followers_count: user.followers_count,
            friends_count: user.friends_count,
            listed_count: user.listed_count,
            favourites_count: user.favorite_count,
            statuses_count: user.statuses_count,
            created_at: user.created_at,
            profile_banner_url: user.profile_banner_url,
            profile_image_url_https: user.profile_image_url_https,
            default_profile: user.default_profile,
            default_profile_image: user.default_profile_image,
            withheld_scope: user.withheld_scope,

            derived: JSON.stringify(user.derived),
            withheld_in_countries: user.withheld_in_countries,
          };

          users.push(userData);
        }
      }
    }
  });
  return {
    tweets,
    users,
  };
};
