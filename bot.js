const Twit = require('twit');
const fs = require('fs');

// Load your Twitter API keys from a separate config file
const config = require('./config');
const T = new Twit(config);

// Read tweet content from a text file
const tweetContent = fs.readFileSync('tweet.txt', 'utf-8').split('\n').filter(Boolean);

// Function to post a random tweet
function postRandomTweet() {
  const randomIndex = Math.floor(Math.random() * tweetContent.length);
  const randomTweet = tweetContent[randomIndex];

  T.post('statuses/update', { status: randomTweet }, (err, data, response) => {
    if (err) {
      console.error('Error posting tweet:', err);
    } else {
      console.log('Tweet posted successfully:', data.text);
    }
  });
}

// Function to retweet randomly from specific keywords
function retweetRandom() {
  const keywords = ['javascript', 'programming', 'tech', 'nodejs'];
  const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];

  T.get('search/tweets', { q: randomKeyword, count: 10 }, (err, data, response) => {
    if (err) {
      console.error('Error searching tweets:', err);
    } else {
      const tweets = data.statuses.filter(tweet => !tweet.retweeted_status);
      if (tweets.length === 0) {
        console.log('No matching tweets found.');
        return;
      }

      const randomTweet = tweets[Math.floor(Math.random() * tweets.length)];
      T.post('statuses/retweet/:id', { id: randomTweet.id_str }, (err, data, response) => {
        if (err) {
          console.error('Error retweeting:', err);
        } else {
          console.log('Retweeted:', randomTweet.text);
        }
      });
    }
  });
}

// Post a random tweet every 4 hours
setInterval(postRandomTweet, 4 * 60 * 60 * 1000);

// Retweet randomly every 3 hours
setInterval(retweetRandom, 3 * 60 * 60 * 1000);
