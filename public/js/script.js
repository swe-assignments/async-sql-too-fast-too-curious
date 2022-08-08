let myLoader = document.getElementById('loader');
let myContent = document.getElementById('content');
let myLogin = document.getElementById('login-form');
myLogin.addEventListener('submit', login);

async function login(e) {
  e.preventDefault();
  let payload = {
    username: myLogin.elements[0].value,
    password: myLogin.elements[1].value,
  };
  let response = await fetch('http://localhost:3000', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(payload),
  });
  console.log(await response.json());
}
