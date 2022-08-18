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

    csvfile = loadFile("csv/newcountryborders.csv");

    
    var dict = {}
    csvfile.split("\n").forEach(function(line) {
      spln = line.split(",");
      dict[spln[0]] = spln[1];
    });

    radiochooser = getRandomInt(0,2);
    console.log("randomint" + radiochooser);
    const select = document.getElementById("d1");

    const initial = document.createElement("option");
    initial.setAttribute("type", "option");
    initial.setAttribute("value", "Select A Country");
    initial.setAttribute("label", "Select A Country");
    select.append(initial);
    
    console.log(dict)


    for (var key in dict) {
      var value = dict[key];


      // do something with "key" and "value" variables
      const li1 = document.createElement("option");
      li1.setAttribute("type", "option");
      li1.setAttribute("value", value);
      li1.setAttribute("label", value);
      select.append(li1); 
    }


     
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
  selectElement = document.querySelector('#d1');
  value = selectElement.value;
  console.log(value)

  if(value == chosenmovie.country + "\r") {
    value = "correct"
  }
  else if (value == "Select A Country") {
    value = "no answer"
  }
  else {
    value = "wrong"
  }
  
  logguess = document.querySelector('#log_guess');
  

  if (value == "no answer" ) {
    alert("please select answer");
  } else if ( value == "correct" ) {
    const listcountry = document.createElement("li");
    listcountry.setAttribute("type", "li");
    listcountry.setAttribute("value", value);
    listcountry.setAttribute("label", value);
    logguess.append(listcountry)

    score = score + 1;
    document.getElementById("score-text").innerHTML = "";
    document.getElementById("score-text").innerHTML = score;
    console.log(score);
    alert("Answer is correct! It took you " + score + " guesses");
    clearBox();
    createGamevar.function1();
  } 
  else {
    score = score + 1;
    document.getElementById("score-text").innerHTML = "";
    document.getElementById("score-text").innerHTML = score;

    const listcountry = document.createElement("li");
    listcountry.setAttribute("type", "li");
    listcountry.setAttribute("value", value);
    listcountry.setAttribute("content", value);
    logguess.append(listcountry)
    
    concatmessage = "";
    if(score == 6) {
      concatmessage = " Sorry, you failed to guess today's movie. Try again tomorrow!"
    }
    
    alert("Answer is wrong." + concatmessage);
  } 
  
  
}; 


function clearBox()
{
    score = 0;
    document.getElementById("score-text").innerHTML = "";
    document.getElementById("score-text").innerHTML = score;
    document.getElementById("d1").innerHTML = "";
}

function getRandomInt(min, max) { 
  return Math.floor(Math.random() * (parseFloat(max) - parseFloat(min) + 1)) + parseFloat(min);
};

function parseCSV(str) {
  var arr = [];
  var quote = false;  // 'true' means we're inside a quoted field

  // Iterate over each character, keep track of current row and column (of the returned array)
  for (var row = 0, col = 0, c = 0; c < str.length; c++) {
    var cc = str[c], nc = str[c + 1];        // Current character, next character
    arr[row] = arr[row] || [];             // Create a new row if necessary
    arr[row][col] = arr[row][col] || '';   // Create a new column (start with empty string) if necessary

    // If the current character is a quotation mark, and we're inside a
    // quoted field, and the next character is also a quotation mark,
    // add a quotation mark to the current column and skip the next character
    if (cc == '"' && quote && nc == '"') { arr[row][col] += cc; ++c; continue; }

    // If it's just one quotation mark, begin/end quoted field
    if (cc == '"') { quote = !quote; continue; }

    // If it's a comma and we're not in a quoted field, move on to the next column
    if (cc == ',' && !quote) { ++col; continue; }

    // If it's a newline (CRLF) and we're not in a quoted field, skip the next character
    // and move on to the next row and move to column 0 of that new row
    if (cc == '\r' && nc == '\n' && !quote) { ++row; col = 0; ++c; continue; }

    // If it's a newline (LF or CR) and we're not in a quoted field,
    // move on to the next row and move to column 0 of that new row
    if (cc == '\n' && !quote) { ++row; col = 0; continue; }
    if (cc == '\r' && !quote) { ++row; col = 0; continue; }

    // Otherwise, append the current character to the current column
    arr[row][col] += cc;
  }
  return arr;
}
