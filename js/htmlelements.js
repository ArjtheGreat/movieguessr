let scoreTextElement = document.getElementById("score-text");
scoreTextElement.innerHTML = 0; 
var form = document.getElementById("d1");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
const img = document.querySelector("#moviepic");
img.src = imageout;

