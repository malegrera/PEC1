const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const age = document.getElementById('age');
const url = document.getElementById('url');


//Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

//Check required fields
function checkRequired(inputArr) {
    let resultado={};
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            resultado[input.id]=false;
        } else {
            showSuccess(input);
            resultado[input.id]=true;
        }
    });
    return resultado;
}

//Check input lenght
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}

// Check password match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

//Check age is valid
function checkAge(input) {
    if (isNaN(input.value)) {
        showError(input, 'Must be a number');
    } else if ((input.value<0) || (input.value>=999)) {
        showError(input,'Debe ser mayor o igual que 0 y menor que 999');
    } else showSuccess(input);
}

//Check url is valid
function checkUrl(input) {
     const re=/^(?:(?:https?|ftp):\/\/)?[\w\-]+((\.|\/)[\w\-]+)*$/i;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Url is not valid');
    }
}

//Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    let required=checkRequired([username, email, password, password2, age, url]);

    for (let valor in required) {
        if (required[valor])
            switch(valor) {
                case "username": checkLength(username, 3, 15); break;
                case "email": checkEmail(email); break;
                case "password": checkLength(password, 6, 25); break;
                case "password2": checkPasswordsMatch(password, password2); break;
                case "age": checkAge(age); break;
                case "url": checkUrl(url); break;
            }
    }
});
