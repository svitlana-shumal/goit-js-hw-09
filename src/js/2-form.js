const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', () => {
  const dataStorage = localStorage.getItem(STORAGE_KEY);
  if (dataStorage) {
    const dataParse = JSON.parse(dataStorage);
    formData.email = dataParse.email;
    formData.message = dataParse.message;
  }
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  formData.email = '';
  formData.message = '';
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
