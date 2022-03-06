const path = require('path');

const fs = require('fs');

module.exports = () => {
  const raw = fs
    .readFileSync(path.join(__dirname, 'popular_hashtags.txt'))
    .toString();
  const rawData = raw.split('\n');
  return rawData;
};
