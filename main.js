var request = new XMLHttpRequest();


request.onreadystatechange = function () {
    if (request.status === 200 && request.readyState === 4){
      var rando1 = document.getElementById('rando1');
      var rando2 = document.getElementById('rando2');
      var rando3 = document.getElementById('rando3');
      var data = JSON.parse(request.responseText).albums.items;
      // console.log(data);
      // console.log(data[1].images[0].url);
      var temp = [];
      for (i=0; i<data.length; i++){
        temp.push(i);
      }

        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
            // console.log(array);
        return array;
        }

    shuffleArray(temp);
    console.log(data[temp[0]].images[0].url);
          rando1.src = data[temp[0]].images[1].url
          rando2.src = data[temp[1]].images[1].url
          rando3.src = data[temp[2]].images[1].url


    }
}
request.open('GET', "https://api.spotify.com/v1/search?q=pink%20floyd&type=album&market=US", true );
request.send();
