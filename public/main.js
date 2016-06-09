$(document).ready(function(){

  $.ajax({
    url: "https://api.spotify.com/v1/search?q=pink%20floyd&type=album&market=US",
  }).done(function(data){
    albumCovers(data.albums.items);
  })

  function albumCovers(albums) {
    var rand1 = Math.floor(Math.random()*albums.length)
    var rand2 = Math.floor(Math.random()*albums.length)
    var rand3 = Math.floor(Math.random()*albums.length)

    $('#rando1').attr('src', albums[rand1].images[1].url);
    $('#rando2').attr('src', albums[rand2].images[1].url);
    $('#rando3').attr('src', albums[rand3].images[1].url);
  }
});
