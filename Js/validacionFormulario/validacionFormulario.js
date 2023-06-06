

// function mandarEmail(nombre, email){
//     Email.send({
//         SecureToken : "a4bfd91d-0c12-4ba1-ba96-1fe9d648d39d",
//         To : email,
//         From : "sssssssss@gmail.com",
//         Subject : "Bienvenido!",
//         Body : `Hola ${nombre}, gracias por comentario`
//     }).then(
//         message => alert(message)
//     );
// }

// function mostraValores(nombre,telefono,email){
//     form.className="oculto"
//     document.querySelector("#nombre-mensaje").innerHTML = `Nombre registrado: ${nombre}`
//     document.querySelector("#telefono-mensaje").innerHTML= `Telefono registrado: ${telefono}`
//     document.querySelector("#email-mensaje").innerHTML = `Email registrado: ${email}`
//     document.querySelector("#mensaje-exito").className=""
// }

// function tomarValoresFormulario(event){
//     let nombre = form.nombre.value
//     let telefono = form.telefono.value
//     let email = form.email.value
//     console.log(nombre)
//     console.log(telefono)
//     console.log(email)
//     event.preventDefault()
//     mostraValores(nombre,telefono,email)
//     mandarEmail(nombre, email)
// }

// form.onsubmit = tomarValoresFormulario

// const email = document.getElementById("mail");

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
//   } else {
//     email.setCustomValidity("");
//   }
// });
console.log('Hola');

// const submitBtn = document.getElementById('submit-btn');

// console.log('Hola');

// const validate = (e) => {
//   e.preventDefault();
//   console.log('Hola');
//   const username = document.getElementById('nombre');
//   const emailAddress = document.getElementById('email-address');
//   if (username.value === "") {
//     alert("Ingrese un nombre.");
//     username.focus();
//     return false;
//   }
    
//   if (emailAddress.value === "") {
//     alert("Ingrese un email valido.");   
//     emailAddress.focus();
//     return false;
//   }

//   if (!emailIsValid(emailAddress.value)) {
//     alert("Ingrese un e-mail valido.");
//     emailAddress.focus();
//     return false;
//   }
  
//   return true; // Can submit the form data to the server
// }

// const emailIsValid = email => {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }


// const btnEnviar = document.getElementById('btn-enviar');

// const validación = (e) => {
//   e.preventDefault();
//   const nombreDeUsuario = document.getElementById('usuario');
//   const direcciónEmail = document.getElementById('email');
//   if (usuario.value === "") {
//     alert("Por favor, escribe tu nombre de usuario.");
//     usuario.focus();
//     return false;
//   }
    
//   if (email.value === "") {
//     alert("Por favor, escribe tu correo electrónico");
//     email.focus();
//     return false;
//   }

//   if (!emailVálido(email.value)) {
//     alert("Por favor, escribe un correo electrónico válido");
//     emailAddress.focus();
//     return false;
//   }
  
//   return true; //Se pueden enviar los datos del formulario al servidor
// }

// const emailVálido = email => {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// submitBtn.addEventListener('click', validate);

// function myFunction() {


//   let text = "Value OK";
//   if (document.getElementById("id1").validity.rangeUnderflow) {
//     text = "Value too small";
//   }
//   alert("no funciona");
// }

// const submitBtn = document.getElementById('submit-btn');

// const validate = (e) => {
//   e.preventDefault();
//   const username = document.getElementById('username');
//   const emailAddress = document.getElementById('email-address');
//   if (username.value === "") {
//     console.log('Hola');
//     alert("Please enter your username.");
//     username.focus();
//     return false;
//   }
    
//   if (emailAddress.value === "") {
//     alert("Please enter your email address.");
//     emailAddress.focus();
//     return false;
//   }

//   if (!emailIsValid(emailAddress.value)) {
//     alert("Please enter a valid email address.");
//     emailAddress.focus();
//     return false;
//   }
  
//   return true; // Can submit the form data to the server
// }

// const emailIsValid = email => {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

//


// const $form = document.querySelector('#form')
//         const $buttonMailto = document.querySelector('#referencia')

//         $form.addEventListener('submit', handleSubmit)

//         function handleSubmit(event){
//             event.preventDefault()
//             const form = new FormData(this)
//             $buttonMailto.setAttribute('href', `mailto:armarquez78@gmail.com?subject=nombre ${form.get('first_lastname')}  correo ${form.get('email')}&body=${form.get('comment')}`)
//             $buttonMailto.click()
//         }


// const $form = document.querySelector('#form')
// const $buttonMailto = document.querySelector('#btnenviar')

// $form.addEventListener('submit', handleSubmit)

// function handleSubmit(event){
//     event.preventDefault()
//     const form = new FormData(this)
//     $buttonMailto.setAttribute('href', `mailto:armarquez78@gmail.com?subject=nombre ${form.get('first_lastname')}  &body=correo ${form.get('email')} telefono ${form.get('tel')} comentario ${form.get('comment')}`)
//     $buttonMailto.click()
// }



const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');


const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};



const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {

    let valid = false;

    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;




const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();


    // validate forms
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};
// 
form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));