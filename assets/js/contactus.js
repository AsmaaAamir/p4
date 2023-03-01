// contact us EmailJS from -https://www.emailjs.com/docs/tutorial/creating-contact-form/ 
window.onload =function(){
    document.getElementsById('contact').addEventListener('submit', function(event) {
        event.preventDefault(); 
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.init('VdTBCASn-iVtZo3xC');
        emailjs.sendForm('abakes', 'abakes-template', this)
            .then (function(){
                console.log('SUCCESS!');
            }, function(error) {
                console.log('Failed....', error);
            });
    });
}


