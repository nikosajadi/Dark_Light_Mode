
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
 
//Light or Dark Images to change with color
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}


// Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    //console.log(toggleIcon.children)
    //for changing the text value of 
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
  }  

// Light Mode Styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
  }



// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      darkMode();
    // if it is not checked,meaning if our checkbox cheched equals false
    } else {
       document.documentElement.setAttribute('data-theme', 'light');
       localStorage.setItem('theme', 'light');
       lightMode();
  }
}



//event listener = here we need to change event instead of cli
toggleSwitch.addEventListener("change", switchTheme); 