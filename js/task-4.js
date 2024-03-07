'use strict'

const form = document.querySelector('.login-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailValue = form.elements.email.value.trim();
    const passwordValue = form.elements.password.value.trim();

    if (emailValue === '' || passwordValue === '') {
      return alert('All form fields must be filled in');
    }
    
    const formData = {
        email: emailValue,
        password: passwordValue
      };
  
      console.log(formData);
      form.reset();
    });
