
const toggleSwitch = document.querySelector('input[type="checkbox"]');


//switch Theme Dynamically
function switchTheme(event) {
    // console.log(event.target.checked);
    // if it is true
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
    // if it is not checked,meaning if our checkbox cheched equals false
    } else {
        documentElement.documentElement.setAttribute('data-theme','light');
    }
}

//event listener 
toggleSwitch.addEventListener('change', switchTheme); 