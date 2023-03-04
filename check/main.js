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

function toggle() {
    if (state) {
        document.getElementById("password").setAttribute("type", "password");
        state = false;
    } else {
        document.getElementById("password").setAttribute("type", "text")
        state = true;
    }
}


function myFunction(show) {
    show.classList.toggle("fa-eye-slash");
}

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
    
if (strength ==1 ) {
    pwdstrength.classList.remove('progress-bar-warning');
    pwdstrength.classList.remove('progress-bar-success');
    pwdstrength.classList.add('progress-bar-danger');
    pwdstrength.style = 'width: 10%';
}else if (strength == 2) {
    pwdstrength.classList.remove('progress-bar-warning');
    pwdstrength.classList.remove('progress-bar-success');
    pwdstrength.classList.add('progress-bar-danger');
    pwdstrength.style = 'width: 35%';
} else if (strength == 2) {
    pwdstrength.classList.remove('progress-bar-warning');
    pwdstrength.classList.remove('progress-bar-success');
    pwdstrength.classList.add('progress-bar-danger');
    pwdstrength.style = 'width: 50%';
} else if (strength == 3) {
    pwdstrength.classList.remove('progress-bar-success');
    pwdstrength.classList.remove('progress-bar-danger');
    pwdstrength.classList.add('progress-bar-warning');
    pwdstrength.style = 'width: 75%';
} else if (strength == 4) {
    pwdstrength.classList.remove('progress-bar-warning');
    pwdstrength.classList.remove('progress-bar-danger');
    pwdstrength.classList.add('progress-bar-success');
    pwdstrength.style = 'width: 100%';
}

    
}
const tag = document.getElementById("generate");