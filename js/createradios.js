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

    radiochooser = getRandomInt(0,2);
    console.log("randomint" + radiochooser);
    const form = document.getElementById("d1");

    const li1 = document.createElement('li');
    const input1 = document.createElement('input');

    const li2 = document.createElement('li');
    const input2 = document.createElement('input');

    const li3 = document.createElement('li');
    const input3 = document.createElement('input');

  
if(radiochooser==0) {
    //radio setup
    radio1var = randomProperty(dict);
    console.log(radio1var);
    radio1text = dict[radio1var];
    radio2text = "";
    radio2var = randomProperty(dict);
    console.log(radio2var);
    if(radio2var == radio1var) {
      while(radio2var == radio1var) {
        radio2var = randomProperty(dict);
      }
    }
    radio2text = dict[radio2var];

    input1.setAttribute("type", "radio");
    input1.setAttribute("value", "1");
    input1.setAttribute("name", "choice");
    li1.append(input1);
    li1.append(radio1text);


    input2.setAttribute("type", "radio");
    input2.setAttribute("value", "2");
    input2.setAttribute("name", "choice");
    li2.append(input2);
    li2.append(radio2text);



    input3.setAttribute("type", "radio");
    input3.setAttribute("value", "correct");
    input3.setAttribute("name", "choice");
    li3.append(input3);
    li3.append(chosenmovie.country);
}


if(radiochooser==1) {
        //radio setup
    radio3var = randomProperty(dict);
    console.log(radio3var);
    radio3text = dict[radio3var];
    radio2text = "";
    radio2var = randomProperty(dict);
    console.log(radio2var);
    if(radio2var == radio3var) {
      while(radio2var == radio3var) {
        radio2var = randomProperty(dict);
      }
    }
    radio2text = dict[radio2var];

    input3.setAttribute("type", "radio");
    input3.setAttribute("value", "3");
    input3.setAttribute("name", "choice");
    li3.append(input3);
    li3.append(radio3text);


    input2.setAttribute("type", "radio");
    input2.setAttribute("value", "2");
    input2.setAttribute("name", "choice");
    li2.append(input2);
    li2.append(radio2text);



    input1.setAttribute("type", "radio");
    input1.setAttribute("value", "correct");
    input1.setAttribute("name", "choice");
    li1.append(input1);
    li1.append(chosenmovie.country);
}





if(radiochooser==2) {
    //radio setup
radio3var = randomProperty(dict);
console.log(radio3var);
radio3text = dict[radio3var];
radio1text = "";
radio1var = randomProperty(dict);
console.log(radio1var);
if(radio1var == radio3var) {
  while(radio1var == radio3var) {
    radio1var = randomProperty(dict);
  }
}
radio1text = dict[radio1var];






input3.setAttribute("type", "radio");
input3.setAttribute("value", "3");
input3.setAttribute("name", "choice");
li3.append(input3);
li3.append(radio3text);



input1.setAttribute("type", "radio");
input1.setAttribute("value", "1");
input1.setAttribute("name", "choice");
li1.append(input1);
li1.append(radio1text);


input2.setAttribute("type", "radio");
input2.setAttribute("value", "correct");
input2.setAttribute("name", "choice");
li2.append(input2);
li2.append(chosenmovie.country);
}
    


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
  createGamevar.function1();
}; 


function clearBox()
{
    document.getElementById("d1").innerHTML = "";
}

function getRandomInt(min, max) { 
  return Math.floor(Math.random() * (parseFloat(max) - parseFloat(min) + 1)) + parseFloat(min);
};