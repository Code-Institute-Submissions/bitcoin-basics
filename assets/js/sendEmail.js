let contactForm = document.getElementById("emailForm");

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

function ValidateEmail(email) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(mailformat)) {
        return true;
    }
    return false;
}

function ValidateMessage(message) {
    if (message !== "") {
        return true;
    }
    return false;
}

contactForm.addEventListener('submit', function () {
    sendMail(this);
})