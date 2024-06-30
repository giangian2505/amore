// Selezione dei pulsanti e del messaggio
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');
const question = document.getElementById('question');

// Array delle domande da mostrare in base ai clic su 'No'
const questions = [
  "Sei bellissima?",
  "Sei bellissima? (Ti prego clicca su 'Si')",
  "Sei bellissima? (Lo sappiamo entrambi che lo sei)",
  "Sei bellissima? (Ti supplico, clicca su 'Si')",
  "Sei bellissima? (Ti prego clicca su 'Si')",
  "Sei bellissima? (Ormai non hai scelta hahah)"
];

// Inizializzazione dell'indice delle domande
let questionIndex = 0;

// Aggiungi event listener per il pulsante 'si'
yesButton.addEventListener('click', function() {
  message.innerHTML = "Finalmente hai capito amore, sei la ragazza più bella al mondo";
  message.classList.remove('hidden');
  question.style.display = 'none';
  yesButton.style.display = 'none';
  noButton.style.display = 'none';
});

// Aggiungi event listener per il pulsante 'no'
let noCount = 0;
noButton.addEventListener('click', function() {
  if (noCount < 5) {
    noCount++;
    questionIndex++;
    if (questionIndex < questions.length) {
      question.innerHTML = questions[questionIndex];
    }
  }
  if (noCount === 5) {
    noButton.style.display = 'none';
    yesButton.style.display = 'inline-block';
    yesButton.innerHTML = 'Si';
  }
});