$(document).ready(function(){

  function populate(){
    $('li.tweetClass').remove();
    for(var i = 0; i < streams.home.length; i++){
      var tweet = streams.home[i];
      var userName = '@' + tweet.user;
      $('ul.tweets').append('<li class=" tweetClass list-group-item">' + '<p id="author">' + userName + '  ' + tweet.created_at + '</p>' + tweet.message + '</li>');
    }
  }

  var displayTweets = function(){
    console.log(streams.home[1].message);
  }

  populate();
  setInterval(populate, 3000);

});
