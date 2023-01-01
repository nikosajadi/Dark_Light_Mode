
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

//I going to optimize this code and a void of reapad code here // Dark Mode Styles || // Light Mode Styles
//Switch Them Dynamically
function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark ? 'rgb(0 0 0 /50%)' : 'rgb(255 255 255 /50%)';
  textBox.style.backgroundColor =  isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 /50%)';
  toggleIcon.children[0].textContent =  isDark ? 'Dark Mode' : 'Light Mode';
  isDark? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon'):
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  isDark? imageMode('dark'): imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      //  localStorage : save our them with in our browser session
      localStorage.setItem('theme', 'dark');
      darkMode();
    // if it is not checked,meaning if our checkbox cheched equals false
    } else {
       document.documentElement.setAttribute('data-theme', 'light');
       //  localStorage :We can chek in Application/inspect
       localStorage.setItem('theme', 'light');
       lightMode();
  }
}



//Event listener = here we need to change event instead of cli
toggleSwitch.addEventListener("change", switchTheme); 

//Check Local Storage for the theme
const currentTheme = localStorage.getItem('theme');
//console.log(currentTheme);
//I going to retrieve the current theme   or Value and keep our defult theme In the browser session
if (currentTheme){
  document.documentElement.setAttribute('data-theme', currentTheme);
  // keep our defult theme with deatail
  if (currentTheme === 'dark'){
    toggleSwitch.checked = true;
    darkMode()
  }

}
