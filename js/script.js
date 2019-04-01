// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
   var thing = $("#search-term").val();
  $.ajax ({
      url: "https://api.giphy.com/v1/gifs/search?q=" + thing + "&rating=pg&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
        var chickenButts = Math.floor(Math.random()*response.data.length);
          $(".contain").html("<img src='" + response.data[chickenButts].images.fixed_width.url + "'>");
      }
  });
});


