// Declare variables and assign objects from the DOM
//register an event listener on the form object.
//create an async function that create a POST request to the server and handles a response.
const content = document.getElementById('content');
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', login);

async function login(e) {
  e.preventDefault();
  let payload = {
    username: loginForm.elements[0].value,
    password: loginForm.elements[1].value,
  };
  try {
    let response = await fetch('http://localhost:3000', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(payload),
    });
    let body = await response.json();
    let { username, city } = body.payload;
    console.log(username, city);
    content.innerText = `User: ${username} - City: ${city}`;
  } catch (err) {
    console.log(err);
  }
}
