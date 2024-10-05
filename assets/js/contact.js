document.addEventListener('DOMContentLoaded', () => {

    

    const contactForm = document.querySelector('#contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Simple form validation
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Send form data to the server or display a success message
        alert('Message sent successfully!');
        contactForm.reset();
    });
});
