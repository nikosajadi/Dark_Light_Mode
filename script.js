
const toggleSwitch = document.querySelector('input[type="checkbox"]');


//switch Theme Dynamically
function switchTheme(event) {
    console.log(event.target.checked);
}

//event listener 
toggleSwitch.addEventListener('change', switchTheme); 