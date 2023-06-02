const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');

if (localStorage.getItem('isLoggedIn') === 'true') {
  window.location.href = 'https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021';
}

loginButton.addEventListener('click', function(event) {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === 'Admin' && password === '123456') {
    // Verificar se a opção "Lembrar de mim" está marcada
    const rememberMe = document.getElementById('rememberMe').checked;

    // Definir o valor correspondente no localStorage
    if (rememberMe) {
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      localStorage.removeItem('isLoggedIn');
    }

    // Redirecionar para a URL desejada
    window.location.href = 'https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021';
  } else {
    alert('Usuário ou senha inválidos.');
  }
});