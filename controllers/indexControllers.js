const twitter = require('../helpers/twitterOauth')

const testing = function(req,res) {
  res.send("Alive")
}

const searchReturn = function(req,res) {
  twitter.twitOauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=%40${req.params.keyword}`,
    process.env.TEST_USER_TOKEN, //test user token
    process.env.TEST_USER_SECRET, //test user secret
      function (e, data, result){
        if (e) {
          res.send(e)
        }
        else if (data){
          res.send(data)
        }
        else if(res){
          res.send(result)
        }
      }
  );
}

module.exports = {
  testing,
  searchReturn
}
