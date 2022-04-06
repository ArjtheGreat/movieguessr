function createGame() {

    // assuming csvfile is a long string which is a read version of the text file  i.e.

    // gb,great bri'ain
    // us,UNited States
    // zh,Algeria

    randomInt = Math.floor(Math.random()*movie.length);
    console.log(randomInt);
    chosenmovie = movie[randomInt];

    // movie.splice(movie.indexOf(randomInt));
    
    console.log(chosenmovie);
    imageout = chosenmovie.pic;
    console.log(imageout);
    
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


  const li1 = document.createElement('li');
  const input1 = document.createElement('form-group');
    
  const form = document.getElementById("d1");

  input1.setAttribute("class", "ui fluid search selection dropdown gds-cr-semantic");
  input1.setAttribute("country-data-region-id", "gds-cr-1");
  input1.setAttribute("name", "choice");
  input1.setAttribute("data-language", "en");
  li1.append(input1);
  console.log("Mr. Bounds")

  form.append(li1);  
}
  

  function updateImage() {
    const img = document.querySelector("#moviepic");
    console.log("this works!!");
    img.src = imageout;
}

var createGamevar = function() {

  var function1 = function() { 
    createGame();
    console.log("works!!");
  }

  

  return {
      function1: function () {
          return function1();
      },
  }
}();

createGamevar.function1();


var submitAnswer = function() {
  var radios = document.getElementsByName('choice');
  if (radios == chosenmovie.country) {
    value = "correct"
  }
  else {
    value = "wrong"
  }
  console.log("country name:" + radios.name)
  
  if (value == "" ) {
    alert('please select answer');
  } else if ( value == "correct" ) {
    alert('Answer is correct !');
    score = score + 1000;
    document.getElementById("score-text").innerHTML = "";
    document.getElementById("score-text").innerHTML = score; 
    console.log(score);
  } else {
    alert('Answer is wrong');
  } 
  clearBox();
  numofquestions = numofquestions-1;
  console.log(numofquestions);
  if(numofquestions>0) {
    createGamevar.function1();
  }
  else {
    alert("game over! Final Score: " + score);
  }
}; 


function clearBox()
{
    document.getElementById("d1").innerHTML = "";
}

function getRandomInt(min, max) { 
  return Math.floor(Math.random() * (parseFloat(max) - parseFloat(min) + 1)) + parseFloat(min);
};