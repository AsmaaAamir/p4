    window.onload = function() {
        document.getElementById('contact').addEventListener("submit", function(event){
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            emailjs.sendForm('abakes', 'abakes-template', this)
                .then(function() {
                    console.log('SUCCESS!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
        });
    }
