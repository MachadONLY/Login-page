const form = document.getElementById('form');

const names = document.getElementById('name');
const labelNames = document.querySelector("label[for='name']");

const phone = document.getElementById('phone');
const labelPhone = document.querySelector("label[for='phone']");

const email = document.getElementById('email');
const labelEmail = document.querySelector("label[for='email']");

const button = document.getElementById('button')


names.addEventListener("keyup", ()=>{

  if(names.value.length < 3){
    names.setAttribute("style", "outline-color:#B00000");
    labelNames.setAttribute("style", "color:#B00000");
  }else{
    names.setAttribute("style", "outline-color:#dddddd");
    labelNames.setAttribute("style", "color:#049200");
  }

});


phone.addEventListener("keyup", ()=>{
  
  const inputPhone = phone.value.trim();
  const phoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/; // Expressão regular para validar o formato (00)00000-0000
  
  if (inputPhone.length < 13 || !phoneRegex.test(inputPhone)) {
    phone.setAttribute("style", "outline-color:#B00000");
    labelPhone.setAttribute("style", "color:#B00000");
  } else {
    phone.setAttribute("style", "outline-color:#dddddd");
    labelPhone.setAttribute("style", "color:#049200");
  }
  
});


email.addEventListener("keyup", ()=>{
  
  if(email.value.length < 5 || !email.value.includes("@")){
    email.setAttribute("style", "outline-color:#B00000");
    labelEmail.setAttribute("style", "color:#B00000");
  }else{
    email.setAttribute("style", "outline-color:#dddddd");
    labelEmail.setAttribute("style", "color:#049200");
  }

});




form.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  if (names.value === "" || phone.value === "" || email.value === "") {
    alert('Todos os campos devem ser preenchidos.');
    return;
  }

  // Validação do nome
  const inputName = names.value.trim();
  if(inputName.length < 3) {
    alert('O nome deve conter pelo menos 3 caracteres.');
    return;
  }
  
  const inputPhone = phone.value.trim();
  if(inputPhone.length != 14 ){
    alert('O número de celular deve conter o seguinte padrão: (**)*****-****');
    return;
  }

  // Validação do email
  const inputEmail = email.value.trim();
  if(inputEmail.length < 5 || !inputEmail.includes("@")) {
    alert('Informe um email válido.');
    return;
  }

  // Se todas as validações passaram, mostrar uma mensagem de sucesso
  alert('Formulário enviado com sucesso!');
  form.submit();
});


const ogColor = button.style.backgroundColor;

button.addEventListener('mouseover', function() {
  button.style.backgroundColor = "#287a2b";
});


button.addEventListener('mouseout', function() {
  button.style.backgroundColor = ogColor;
});

const darkMode = document.getElementById('dark');
const body = document.body;

darkMode.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});