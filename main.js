var request = new XMLHttpRequest();


request.onreadystatechange = function () {
    if (request.status === 200 && request.readyState === 4){
      var rando1 = document.getElementById('rando1');
      var rando2 = document.getElementById('rando2');
      var rando3 = document.getElementById('rando3');
      var data = JSON.parse(request.responseText);

      var temp = [];
      for (i=0; i<data.results.length; i++){
        temp.push(i);
      }

        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
        return array;
        }

    shuffleArray(temp);
          rando1.src = "images/" +data.results[temp[0]].cover_art;
          rando2.src = "images/" +data.results[temp[1]].cover_art;
          rando3.src = "images/" +data.results[temp[2]].cover_art;


    }
}
request.open('GET', "https://lit-fortress-6467.herokuapp.com/object", true );
request.send();
