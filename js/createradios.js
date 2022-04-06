function createGame() {

    // assuming csvfile is a long string which is a read version of the text file  i.e.

    // gb,great bri"ain
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

    radiochooser = getRandomInt(0,2);
    console.log("randomint" + radiochooser);
    const select = document.getElementById("d1");

    const li1 = document.createElement("option");
    li1.setAttribute("type", "option");
    li1.setAttribute("value", "United States");
    li1.setAttribute("name", "United States");

    const li2 = document.createElement("option");
    li2.setAttribute("type", "option");
    li2.setAttribute("value", "Premium"); 
    li2.setAttribute("name", "Premium");
    console.log("premium")

    const li3 = document.createElement("option");
    li3.setAttribute("type", "option");
    li3.setAttribute("value", "VIP");

    select.append(li1);  
    select.append(li2);  
    select.append(li3);  
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
  console.log("hi");
  var radios = document.getElementsByName("choice");
  var value= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         value = radios[i].value; 
         break;
       }
  }
  
  if (value == "" ) {
    alert("please select answer");
  } else if ( value == "correct" ) {
    alert("Answer is correct !");
    score = score + 1000;
    document.getElementById("score-text").innerHTML = "";
    document.getElementById("score-text").innerHTML = score; 
    console.log(score);
  } else {
    alert("Answer is wrong");
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