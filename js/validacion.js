function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


// Aca se valida el formulario de registro
document.addEventListener("DOMContentLoaded", function() {
    const regBtn = document.getElementById("regBtn");
    regBtn.addEventListener("click", function() {
        
        // Aca se guardan cada dato en la que corresponde
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const email = document.getElementById("email").value.trim();
        const password1 = document.getElementById("password1").value;
        const password2 = document.getElementById("password2").value;
        const terminos = document.getElementById("terminos").checked;



        // Chequea que no este nignuno vacio
        if (!nombre || !apellido || !email || !password1 || !password2) {
            showAlertError();
            return;
        }

        // Chequea la contra sea al menos de 6 caracteres
        if (password1.length < 6) {
            showAlertError();
            return;
        }

        // Chequea que se haya puesto la contra igual
        if (password1 !== password2) {
            showAlertError();
            return;
        }

        // Chequea que se hayan aceptado los terminos
        if (!terminos) {
            showAlertError();
            return;
        }
        showAlertSuccess();

  
      });
  });