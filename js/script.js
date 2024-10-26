document.addEventListener("DOMContentLoaded", function() {
    // Crear contenedor y etiqueta del switch
    const switchContainer = document.createElement("div");
    switchContainer.className = "switch-container";
    const switchLabel = document.createElement("span");
    switchLabel.className = "switch-label";
    switchLabel.innerText = "Modo Oscuro";

    // Creacion del interruptor para el modo oscuro
    const switchInput = document.createElement("input");
    switchInput.type = "checkbox";
    switchInput.id = "themeSwitch";

    const switchSlider = document.createElement("span");
    switchSlider.className = "slider";

    const switchWrapper = document.createElement("label");
    switchWrapper.className = "switch";
    switchWrapper.appendChild(switchInput);
    switchWrapper.appendChild(switchSlider);

    switchContainer.appendChild(switchLabel);
    switchContainer.appendChild(switchWrapper);
    document.body.appendChild(switchContainer);

    // Verificar el estado del tema (oscuro-claro)
    if (localStorage.getItem("darkTheme") === "enabled") {
        document.body.classList.add("dark-theme");
        switchInput.checked = true;
    }

    // Cambiar el modo oscuro al activar o desactivar el switch
    switchInput.addEventListener("change", function() {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("darkTheme", "enabled");
        } else {
            localStorage.setItem("darkTheme", "disabled");
        }
    });


    // Verificar el estado guardado en localStorage y aplicar el modo oscuro si es necesario
    if (localStorage.getItem("darkTheme") === "enabled") {
        document.body.classList.add("dark-theme");
        themeToggleBtn.innerText = "Modo Claro"; 
    }

    // Alterna el modo oscuro y guarda el estado en localStorage
    themeToggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");

        // Guarda el estado en localStorage
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("darkTheme", "enabled");
            themeToggleBtn.innerText = "Modo Claro"; // Cambia el texto del botón
        } else {
            localStorage.setItem("darkTheme", "disabled");
            themeToggleBtn.innerText = "Modo Oscuro"; // Cambia el texto del botón
        }
    });
});


    // Validación de formulario de contacto
    const form = document.querySelector('form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const messageField = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        let valid = true;

        // Validar que los campos no estén vacíos
        if (nameField.value.trim() === "") {
            alert("Por favor ingrese su nombre.");
            valid = false;
        }

        if (emailField.value.trim() === "") {
            alert("Por favor ingrese su correo electrónico.");
            valid = false;
        } else if (!validateEmail(emailField.value)) {
            alert("Por favor ingrese un correo electrónico válido.");
            valid = false;
        }

        if (phoneField.value.trim() === "") {
            alert("Por favor ingrese su número de contacto.");
            valid = false;
        } else if (!validatePhone(phoneField.value)) {
            alert("Por favor ingrese un número de contacto válido (10 dígitos).");
            valid = false;
        }

        if (messageField.value.trim() === "") {
            alert("Por favor ingrese un mensaje.");
            valid = false;
        }

        // Si hay algún error, no enviar el formulario
        if (!valid) {
            event.preventDefault();
        }
    });

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Función para validar el formato del número de contacto
    function validatePhone(phone) {
        return /^[0-9]{10}$/.test(phone);
    }
