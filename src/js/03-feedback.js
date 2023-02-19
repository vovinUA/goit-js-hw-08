import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const saveFormData = function () {
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: email,
      message: message,
    })
  );
};

const throttledSaveFormData = _.throttle(saveFormData, 500);

form.addEventListener('input', throttledSaveFormData);

const submitForm = function (event) {
  event.preventDefault();
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;
  console.log(`email: ${email}, message: ${message}`);
  localStorage.setItem('feedback-form-state', '');
  form.reset();
};

form.addEventListener('submit', submitForm);

const formData = JSON.parse(
  localStorage.getItem('feedback-form-state') || '{}'
);

form.elements['email'].value = formData.email || '';
form.elements['message'].value = formData.message || '';
