var submitAnswer = function() {
  <script type="text/javascript" src="alert.php"></script>
  var radios = document.getElementsByName('choice');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if ( val == "1" ) {
    alert('Answer is correct !');
    print("joe");
  } else {
    alert('Answer is wrong');
  }
};

