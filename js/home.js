alert("Seja Bem-Vindo!")

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function startSlideshow() {
  showSlide(currentSlide);
  setInterval(nextSlide, 2000); 
}

startSlideshow();


function showDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const dateTime = new Date().toLocaleString('pt-BR', options).replace(',', ' -');
    dateTimeElement.textContent = dateTime;
  }
  
  showDateTime(); // Chamada inicial da função para exibir a data e hora
  
  setInterval(showDateTime, 1000); // Chamada repetida da função a cada segundo