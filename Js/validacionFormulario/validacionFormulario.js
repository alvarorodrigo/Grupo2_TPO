

// function validateForm() {

//     let nombre = document.getElementById("nombre")
//     let x = document.forms["myForm"]["fname"].value;
//     if (nombre === "banana") {
//       alert("Debe introducir un nombre de la real academia española");
//       return false;
//     }
//   }


function validateForm() {
     let x = document.forms["myForm"]["fname"].value;
  
     if (x === "") {
       alert("Debe introducir un nombre de la Real Academia Española");
       return false;
     }
  
    if (!isNaN(x)) {
       alert("El nombre no puede ser un valor numérico");       return false;
     }
  
     // Resto del código de validación o acciones adicionales
  
    return true;
   }

console.log("esto esta linkeado bien")