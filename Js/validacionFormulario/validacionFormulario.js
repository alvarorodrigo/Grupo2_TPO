//const form = document.querySelector("#form")

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

const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
  e.preventDefault();
  const username = document.getElementById('nombre');
  const emailAddress = document.getElementById('email-address');
  if (username.value === "") {
    alert("Ingrese un nombre.");
    username.focus();
    return false;
  }
    
  if (emailAddress.value === "") {
    alert("Ingrese un email valido.");   
    emailAddress.focus();
    return false;
  }

  if (!emailIsValid(emailAddress.value)) {
    alert("Ingrese un e-mail valido.");
    emailAddress.focus();
    return false;
  }
  
  return true; // Can submit the form data to the server
}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

