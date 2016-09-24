$(document).ready(function(){

  $.ajax({
    url: "https://api.spotify.com/v1/search?q=pink%20floyd&type=album&market=US",
  }).done(function(data){
    albumGen(data.albums.items);
  })

function albumGen(albums) {
  albums.forEach(function(album) {
    var img = document.createElement('img');
    img.src = album.images[1].url;
    $(img).appendTo('#albums');
    $(img).attr('id', album.id);
    $(img).attr('class', 'album');
  })
};

$(document).on('click', '.album', function (event) {
  var albumId = event.target.id;

  $.ajax({
    url: "https://api.spotify.com/v1/albums/" + albumId,
  }).done(function(data){
   albumPick(data);
  });

  function albumPick(selection){
    var pick = document.createElement('p');
    $(pick).html(selection.name);
    $(pick).appendTo('#trackBox');
  }
});

$("#clearTracks").on('click', function(event){
  $('#trackBox').empty();
});

$("#submitBin").on('click', function(event){
  $('#trackBox').empty();
  alert('Great picks! Your playlist has been submitted.');
});


//
// var request = new XMLHttpRequest();
// var sendData = new XMLHttpRequest();
// var albumsDiv = document.getElementById('albums');
// var trackBox = document.getElementById('trackBox');
// var clearTracks = document.getElementById('clearTracks');
// var submitBin = document.getElementById('submitBin');
// var postData = [];
//
// request.onreadystatechange = function () {
//   if (request.status === 200 && request.readyState === 4){
//     var data = JSON.parse(request.responseText).albums.items;
//
//     // console.log(data);
//     // data[i].images[1].url
//
//     for (i=0; i<data.length; i++){
//       var newImg = document.createElement("img");
//       newImg.src = data[i].images[1].url;
//       newImg.id = "album" + i;
//       albumsDiv.appendChild(newImg);
//     }
//
//     for (i=0; i<data.length; i++){
//       var albumNum = document.getElementById("album" + i);
//
//       albumNum.addEventListener("click", function(){
//         var selectionNum = this.id.slice(this.id.length-1, this.id.length);
//         var newSelection = document.createElement("p");
//         newSelection.innerHTML = "Pink Floyd : " + data[selectionNum].name;
//         trackBox.appendChild(newSelection);
//         postData.push(data[selectionNum]);
//       })
//     }
//
//   }
// }
//
// clearTracks.addEventListener("click", function(){
//   trackBox.innerHTML = "";
//   postData = [];
// });
// 
// submitBin.addEventListener("click", function(){
//   postData = JSON.stringify(postData);
//   sendData.open('POST', "https://lit-fortress-6467.herokuapp.com/post");
//   // This is a dummy server from another track API setup to simply return a successful post string.
//   sendData.send(postData);
//   sendData.addEventListener("load", function(event) {
//      console.log(event.target.responseText);
//    });
//    trackBox.innerHTML = "";
//    postData = [];
// })
//
//
//
// request.open('GET', "https://api.spotify.com/v1/search?q=pink%20floyd&type=album&market=US", true);
// request.send();


//document ready closure
})
