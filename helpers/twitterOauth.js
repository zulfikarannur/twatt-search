const OAuth = require('oauth');

var twitOauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.CONSUMER_KEY,//consumer key
  process.env.CONSUMER_SECRET, //consumer secret
  '1.0A',
  null,
  'HMAC-SHA1'
)

module.exports = {
  twitOauth
};
