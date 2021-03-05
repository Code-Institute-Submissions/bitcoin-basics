let contactForm = document.getElementById("emailForm");

//Call the validated data from the form and display the appropriate response modal to provide feedback for the sender.
function sendMail(contactForm) {
    const email = document.getElementById("replyTo").value;
    const message = document.getElementById("emailMessage").value;
    let isValid = ValidateEmail(email);
    let mValid = ValidateMessage(message);
    if (isValid && mValid) {
        emailjs.send("gmail", "bb", {
                "from_name": contactForm.name.value,
                "from_email": contactForm.emailaddress.value,
                "message": contactForm.message.value
            })
            .then(
                function (response) {
                    $('#emailModalSuccess').modal('show');
                },
                function (error) {
                    $('#emailModalError').modal('show');
                });
    } else {
        $('#emailModalError').modal('show');
    }
    return false;
}

//Validation for email field
function ValidateEmail(email) {
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(mailformat)) {
        return true;
    }
    return false;
}

//Validation for text area to ensure it is not empty
function ValidateMessage(message) {
    if (message !== "") {
        return true;
    }
    return false;
}

//Form Validation
(function () {
    'use strict';
    window.addEventListener('load', function () {
        let forms = document.getElementsByClassName('needs-validation');
        let validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();