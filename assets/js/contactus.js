// contact us EmailJS from -https://www.emailjs.com/docs/tutorial/creating-contact-form/ 
window.onload =function(){
    document.getElementsByClassName('contact-form').addEventListener("submit", function (event) {
        event.preventDefault();
        emailjs.init('VdTBCASn-iVtZo3xC');
        emailjs.sendForm('abakes', 'abakes', this)
            .then (function(){
                alert('Thank you for your message..Your message has been fowarded to the A Bakes team and they get back to you.")  ');
            }, function(error) {
                console.log('Failed....', error);
            });
    });
}