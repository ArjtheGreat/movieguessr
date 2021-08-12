function createGame() {

    // assuming csvfile is a long string which is a read version of the text file  i.e.

    // gb,great bri'ain
    // us,UNited States
    // zh,Algeria

    result = movie[Math.floor(Math.random()*movie.length)];;
    imageout = result.pic;
    movie.splice(movie.indexOf(result));
    updateImage();

    

    

    function loadFile(filePath) {
      var thing = null;
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", filePath, false);
      xmlhttp.send();
      if (xmlhttp.status==200) {
        thing = xmlhttp.responseText;
      }
      return thing;
    }

    csvfile = loadFile("csv/countrycodes.csv");

    
    var dict = {}
    csvfile.split("\n").forEach(function(line) {
      spln = line.split(",");
      dict[spln[0]] = spln[1];
    });

    radio1text = dict[randomProperty(dict)];
    radio2text = dict[randomProperty(dict)];
    


    const form = document.getElementById("d1");
    const li1 = document.createElement('li');
    const input1 = document.createElement('input');

    input1.setAttribute("type", "radio");
    input1.setAttribute("value", "1");
    input1.setAttribute("name", "choice");
    li1.append(input1);
    li1.append(radio1text);

    const li2 = document.createElement('li');
    const input2 = document.createElement('input');

    input2.setAttribute("type", "radio");
    input2.setAttribute("value", "2");
    input2.setAttribute("name", "choice");
    li2.append(input2);
    li2.append(radio2text);

    const li3 = document.createElement('li');
    const input3 = document.createElement('input');

    input3.setAttribute("type", "radio");
    input3.setAttribute("value", "3");
    input3.setAttribute("name", "choice");
    li3.append(input3);
    li3.append("United States");


    form.append(li1);  
    form.append(li2);  
    form.append(li3);  
  }

  function updateImage() {
    const img = document.querySelector("#moviepic");
    img.src = imageout;
}

var createGamevar = function() {

  var function1 = function() { 
    createGame();
  }


  return {
      function1: function () {
          return function1();
      },
  }
}();

createGamevar.function1();