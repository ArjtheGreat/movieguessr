var submitAnswer = function() {
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
  } else if ( value == "1" ) {
    alert('Answer is correct !');
    let scoreTextElement = document.getElementById("score-text");
    scoreTextElement.innerHTML = scoreTextElement.innerHTML+1000; 
  } else {
    alert('Answer is wrong');
  }
};

