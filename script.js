function lightMode() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  let button = document.getElementById('mode');
  button.textContent = "Dark Mode";
}

function darkMode() {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
  let button = document.getElementById('mode');
  button.textContent = "Light Mode";
}

function toggleMode(){
  let button = document.getElementById('mode');
  if(button.textContent == "Dark Mode"){
    darkMode();
  } else{
    lightMode();
  }
}

let modeButton = document.getElementById('mode');
modeButton.addEventListener('click', toggleMode);
