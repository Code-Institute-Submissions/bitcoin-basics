function sendMail(contactForm) {

    console.log(contactForm.name.value);
    console.log(contactForm.emailaddress.value);
    console.log(contactForm.message.value);

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
            });
    return false;
}