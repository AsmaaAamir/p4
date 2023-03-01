    window.onload = function() {
        document.getElementById('contact').addEventListener("submit", function(event){
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;
            emailjs.sendForm('abakes', 'abakes-template', this)
                .then(function() {
                    console.log('SUCCESS!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
        });
    }
