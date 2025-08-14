function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

 // Chequea que se haya puesto la contra igual
        if (password1 !== password2) {
            showAlertError();
            return;
        }
