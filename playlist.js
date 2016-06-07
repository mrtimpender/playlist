var request = new XMLHttpRequest();
var sendData = new XMLHttpRequest();
var albumsDiv = document.getElementById('albums');
var trackBox = document.getElementById('trackBox');
var clearTracks = document.getElementById('clearTracks');
var submitBin = document.getElementById('submitBin');
var postData = [];

request.onreadystatechange = function () {
  if (request.status === 200 && request.readyState === 4){
    var data = JSON.parse(request.responseText);

    for (i=0; i<data.results.length; i++){
      var newImg = document.createElement("img");
      newImg.src = "images/" + data.results[i].cover_art;
      newImg.id = "album" + i;
      albumsDiv.appendChild(newImg);
    }

    for (i=0; i<data.results.length; i++){
      var albumNum = document.getElementById("album" + i);

      albumNum.addEventListener("click", function(){
        var selectionNum = this.id.slice(this.id.length-1, this.id.length);
        var newSelection = document.createElement("p");
        newSelection.innerHTML = data.results[selectionNum].artist + " : " + data.results[selectionNum].title;
        trackBox.appendChild(newSelection);
        postData.push(data.results[selectionNum]);
      })
    }

  }
}

clearTracks.addEventListener("click", function(){
  trackBox.innerHTML = "";
  postData = [];
});

submitBin.addEventListener("click", function(){
  postData = JSON.stringify(postData);
  sendData.open('POST', "https://lit-fortress-6467.herokuapp.com/post");
  sendData.send(postData);
  sendData.addEventListener("load", function(event) {
     console.log(event.target.responseText);
   });
   trackBox.innerHTML = "";
   postData = [];
})



request.open('GET', "https://lit-fortress-6467.herokuapp.com/object", true);
request.send();
