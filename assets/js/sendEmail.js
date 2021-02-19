function sendMail(contactForm) {

    //console.log(contactForm.name.value);
    //console.log(contactForm.emailaddress.value);
    //console.log(contactForm.message.value);

    /*const x = document.forms["#emailForm"]["name"].value;

   if (form.checkValidity() === false) {

        $('#emailModalError').modal('show');
        console.log("FAILED", error);
        return false;

    }*/
    //const name = contactForm.name.value;
    const email = document.getElementById("replyTo").value;
    //const message = contactForm.message.value;

    let isValid = ValidateEmail(email);

    if (isValid) {
        emailjs.send("gmail", "bb", {
                "from_name": contactForm.name.value,
                "from_email": contactForm.emailaddress.value,
                "message": contactForm.message.value
            })
            .then(
                function (response) {
                    $('#emailModalSuccess').modal('show');
                    console.log("SUCCESS", response);

                },
                function (error) {
                    $('#emailModalError').modal('show');
                    console.log("FAILED", error);
                })
        } else {
            $('#emailModalError').modal('show');
        }
    return false;
}

function ValidateEmail(email) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(mailformat)) {
        $('#emailModalSuccess').modal('show');
        console.log("SUCCESS is valid");
        return true;
    } else {
        $('#emailModalError').modal('show');
        console.log("FAILED");
        return false;
    }
}


(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
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