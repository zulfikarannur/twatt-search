const twitter = require('../helpers/twitterOauth')

const testing = function(req,res) {
  res.send("Alive")
}

const searchReturn = function(req,res) {
  twitter.twitOauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=%40${req.params.keyword}&count=10`,
    process.env.TEST_USER_TOKEN, //test user token
    process.env.TEST_USER_SECRET, //test user secret
      function (e, data, result){
        if (e) {
          res.send(e)
        }
        else if (data){
          console.log("Data");
          var status_many = []
          JSON.parse(data).statuses.forEach(function(status) {
            var status_one = {}
            status_one['text'] = `${status.text}`
            status_one['user_id'] = `${status.user.id}`
            status_one['user_name'] = `${status.user.name}`
            status_many.push(status_one)
          })
          res.send(status_many)
          // res.send(JSON.parse(data).statuses)
        }
        else if(result){
          console.log("Result");
          res.send(result.statuses)
        }
      }
  );
}

module.exports = {
  testing,
  searchReturn
}
