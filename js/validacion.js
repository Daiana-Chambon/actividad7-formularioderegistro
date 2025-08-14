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
