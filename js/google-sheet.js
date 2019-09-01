const scriptURL = 'https://script.google.com/macros/s/AKfycbwGLEQFoKH3q9FuElNhNWeV9SjomlOTF7KXDeNCT2IImuhgD1g/exec'
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
  console.log("here");
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})