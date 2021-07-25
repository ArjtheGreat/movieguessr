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
  } else if ( value == "1" ) {
    alert('Answer is correct !');
    score = score + 1000;
    document.getElementById("score-text").innerHTML = "";
    document.getElementById("score-text").innerHTML = score; 
    console.log(score);
  } else {
    alert('Answer is wrong');
  } 
  result = movie[Math.floor(Math.random()*movie.length)];;
imageout = result.pic;
movie.splice(movie.indexOf(result));
updateImage();
}; 

