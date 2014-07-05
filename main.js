$(document).ready(function(){


  function populate(){
    $('li.tweetClass').remove();
    for(var i = 0; i < streams.home.length; i++){
      var tweet = streams.home[i];
      var userName = '@' + tweet.user;
      $('ul.tweets').append('<li class="tweetClass list-group-item">' + '<p id="author">' + '<div class="filterValue">' + userName + '</div>' + '  ' + tweet.created_at + '</p>' + tweet.message + '</li>');
    }
  };

  function userPopulate(input){
    $('li.tweetClass').remove();
    for(var i = 0; i < streams.home.length; i++){
      var tweet = streams.home[i];
      var userName = '@' + tweet.user;
      if(input === userName){
      $('ul.tweets').append('<li class="tweetClass list-group-item">' + '<p id="author">' + '<div class="filterValue">' + userName + '</div>' + '  ' + tweet.created_at + '</p>' + tweet.message + '</li>');
      }
    }
  };

  var refreshSwitch = true;
  populate();
  setInterval(function(){
    if(refreshSwitch === true){
      populate();
    }

  }, 3000);

  $(document).on('click','.filterValue', function(){
    refreshSwitch = false;
    userPopulate($(this).text());
  });

  $('#title').on('click', function(){
    refreshSwitch = true;
    populate();
    });

});
