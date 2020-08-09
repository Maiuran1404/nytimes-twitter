var express = require('express');
var router = express.Router();
const Twit = require('twit')

router.get('/tweet/:name', function(req, res, next) {
    // res.send('API is working properly');

    const consumer_key= '2940949545-XJNfRHBFxgOQVVGvrP9rCjsfQdsQcsNSI9ZIld1'
    const consumer_secret= 'ISs7Yy4hrFl0f2O9egH5LH8OuZ5fFWb9NrvtEH7eRKTbD'
    const access_token= 'Y2zXMonArjhFUCa6plmzyl1bJ'
    const access_token_secret= 'Wo66ZAGUyoipc66jucg8bfibTepUO71TnTsLgMw4e4ENq9fR1h'
    
    var T = new Twit({
      consumer_key:         'Y2zXMonArjhFUCa6plmzyl1bJ',
      consumer_secret:      'Wo66ZAGUyoipc66jucg8bfibTepUO71TnTsLgMw4e4ENq9fR1h',
      access_token:         '2940949545-XJNfRHBFxgOQVVGvrP9rCjsfQdsQcsNSI9ZIld1',
      access_token_secret:  'ISs7Yy4hrFl0f2O9egH5LH8OuZ5fFWb9NrvtEH7eRKTbD',
    });


    function searchTweets(name){

        T.get('search/tweets', { q: `#${name} since:2020-04-15`, count: 10 }, function(err, data, response) {
            const tweets = data.statuses
            .map(tweet => `${tweet.user.screen_name} --> ${tweet.text}`) //CHECK LANGUAGE
          //   .map(tweet => tweet.text)
          //   .filter(tweet => tweet.toLowerCase().includes('elon'));
            console.log(tweets);
            
            res.send(tweets)
          })
    }
    
    
    searchTweets(req.params.name);

});

router.get('/twitter', function(req, res, next){
    const consumer_key= '2940949545-XJNfRHBFxgOQVVGvrP9rCjsfQdsQcsNSI9ZIld1'
    const consumer_secret= 'ISs7Yy4hrFl0f2O9egH5LH8OuZ5fFWb9NrvtEH7eRKTbD'
    const access_token= 'Y2zXMonArjhFUCa6plmzyl1bJ'
    const access_token_secret= 'Wo66ZAGUyoipc66jucg8bfibTepUO71TnTsLgMw4e4ENq9fR1h'
    
    var T = new Twit({
      consumer_key:         'Y2zXMonArjhFUCa6plmzyl1bJ',
      consumer_secret:      'Wo66ZAGUyoipc66jucg8bfibTepUO71TnTsLgMw4e4ENq9fR1h',
      access_token:         '2940949545-XJNfRHBFxgOQVVGvrP9rCjsfQdsQcsNSI9ZIld1',
      access_token_secret:  'ISs7Yy4hrFl0f2O9egH5LH8OuZ5fFWb9NrvtEH7eRKTbD',
    });

    function searchTweets(name){
        T.get('search/tweets', { q: `#${name} since:2020-04-15`, count: 10 }, function(err, data, response) {
            const tweets = data.statuses
            .map(tweet => `${tweet.user.screen_name} --> ${tweet.text}`) //CHECK LANGUAGE
          //   .map(tweet => tweet.text)
          //   .filter(tweet => tweet.toLowerCase().includes('elon'));
            console.log(tweets);
            res.send(tweets)
          })
    }
    
    
    // searchTweets('elon');

})







module.exports = router;