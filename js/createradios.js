function createGame() {

    // assuming csvfile is a long string which is a read version of the text file  i.e.

    // gb,great bri'ain
    // us,UNited States
    // zh,Algeria

    randomInt = Math.floor(Math.random()*movie.length);
    console.log(randomInt);
    chosenmovie = movie[randomInt];
    
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
    li3.append(chosenmovie.country);


    form.append(li1);  
    form.append(li2);  
    form.append(li3);  
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
  var radios = document.getElementsByName('choice');
  var value= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         value = radios[i].value; 
         break;
       }
  }
  
  if (value == "" ) {
    alert('please select answer');
  } else if ( value == "3" ) {
    alert('Answer is correct !');
    score = score + 1000;
    document.getElementById("score-text").innerHTML = "";
    document.getElementById("score-text").innerHTML = score; 
    console.log(score);
  } else {
    alert('Answer is wrong');
  } 
  clearBox();
  createGamevar.function1();
}; 


function clearBox()
{
    document.getElementById("d1").innerHTML = "";
}