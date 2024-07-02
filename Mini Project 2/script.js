// Get the form element
const form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input values
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const number = document.querySelector('input[type="number"]').value;
    const subject = document.querySelector('input[type="text"]').value;
    const message = document.querySelector('textarea').value;

    // Perform validation checks
    let isValid = true;
    let errorMessages = [];

    if (name.trim() === '' || name.trim().length < 3) {
        isValid = false;
        errorMessages.push('Please enter your name');
   
    }

    else if (email.trim() === '') {
        isValid = false;
        errorMessages.push('Please enter your email');
    } else if (!validateEmail(email)) {
        isValid = false;
        errorMessages.push('Please enter a valid email');
    }

    else if (number.trim() === '') {
        isValid = false;
        errorMessages.push('Please enter your number');
    }

    else if (subject.trim() === '') {
        isValid = false;
        errorMessages.push('Please enter your subject');
    }

    else if (message.trim() === '') {
        isValid = false;
        errorMessages.push('Please enter your message');
    }

    // Display error messages
    if (!isValid) {
        const errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = errorMessages.join('<br>');
        form.insertBefore(errorElement, form.firstChild);
        return;
    }

    // Perform additional actions here
    // For example, you can send the form data to a server or display a success message
    console.log('Form submitted:', { name, email, number, subject, message });

    // Reset the form fields
    form.reset();
});

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Back to Top Button
// var backToTopButton = document.getElementById('backToTop');

// window.onscroll = function() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         backToTopButton.style.display = 'block';
//     } else {
//         backToTopButton.style.display = 'none';
//     }
// };

// backToTopButton.addEventListener('click', function() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// });

// Responsive Menu (if needed for more complex menus)
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function() {
        if (navbar) {
            navbar.classList.toggle('hide-nav');
            navbar.classList.toggle('show-nav');
        }
    });
});
document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
