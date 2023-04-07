// SURAJ C S 20BCE1678 CYBERSEC JCOMP 

let state = false;
let password = document.getElementById("password");
let pwdstrength = document.getElementById("password-strength");
let lowUpperCase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");
let generate = true;
password.addEventListener("keyup", function () {
    let pass = document.getElementById("password").value;
    checkStrength(pass);
});


// Define a function to check the strength of the password and update the strength bar and indicators accordingly
// It also checks for the presence of lowercase and uppercase letters, numbers, and special characters in the password.
// If the password is weak, the strength bar is red, if it is medium, the strength bar is yellow, and if it is strong, the strength bar is green.

function checkStrength(password) {
    let strength = 0;

   
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    strength += 1;
    lowUpperCase.classList.remove('fa-circle');
    lowUpperCase.classList.add('fa-check');
    } else {
    lowUpperCase.classList.add('fa-circle');
    lowUpperCase.classList.remove('fa-check');
    }
    
    if (password.match(/([0-9])/)) {
        strength += 1;
        number.classList.remove('fa-circle');
        number.classList.add('fa-check');
    } else {
        number.classList.add('fa-circle');
        number.classList.remove('fa-check');
    }

    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
        specialChar.classList.remove('fa-circle');
        specialChar.classList.add('fa-check');
    } else {
        specialChar.classList.add('fa-circle');
        specialChar.classList.remove('fa-check');
    }

    if (password.length > 7) {
        strength += 1;
        eightChar.classList.remove('fa-circle');
        eightChar.classList.add('fa-check');
    } else {
        eightChar.classList.add('fa-circle');
        eightChar.classList.remove('fa-check');
    }
 // This section sets the progress bar's width and color based on the password strength  
 // If password strength is 0, set progress bar to red with width 10%
if (strength == 0 ) {
    pwdstrength.classList.remove('progress-bar-warning');
    pwdstrength.classList.remove('progress-bar-success');
    pwdstrength.classList.add('progress-bar-danger');
    pwdstrength.style = 'width: 10%';
    // If password strength is 1, set progress bar to red with width 35%
}else if (strength == 1) {
    pwdstrength.classList.remove('progress-bar-warning');
    pwdstrength.classList.remove('progress-bar-success');
    pwdstrength.classList.add('progress-bar-danger');
    pwdstrength.style = 'width: 35%';
    // If password strength is 2, set progress bar to red with width 50%
} else if (strength == 2) {
    pwdstrength.classList.remove('progress-bar-warning');
    pwdstrength.classList.remove('progress-bar-success');
    pwdstrength.classList.add('progress-bar-danger');
    pwdstrength.style = 'width: 50%';
    // If password strength is 3, set progress bar to yellow with width 75%
} else if (strength == 3) {
    pwdstrength.classList.remove('progress-bar-success');
    pwdstrength.classList.remove('progress-bar-danger');
    pwdstrength.classList.add('progress-bar-warning');
    pwdstrength.style = 'width: 75%';
    // If password strength is 4, set progress bar to green with width 100%
} else if (strength == 4) {
    pwdstrength.classList.remove('progress-bar-warning');
    pwdstrength.classList.remove('progress-bar-danger');
    pwdstrength.classList.add('progress-bar-success');
    pwdstrength.style = 'width: 100%';
}

    
}
const tag = document.getElementById("generate");