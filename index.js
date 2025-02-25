/* const questionEl = document.querySelector('.question');

questionEl.textContent = 'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.'

const answerTextElement = document.querySelector('.answer__text');

answerTextElement.textContent = prompt('Zadejte svou odpověď.');

const answerElement = document.querySelector('.answer');

if (answerTextElement.textContent === 'Bell' || answerTextElement.textContent === 'bell') {
    answerElement.classList.add('answer--correct');
} else {
    answerElement.classList.add('answer--wrong');
};
*/ 

//fce prompt je modální (tzn., že blokuje interakci s webovou stránkou, dokud uživatel neodpoví)

const questionElm = document.querySelector('.question');
const question = 'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.'

questionElm.textContent = question;

const answerUser = prompt('Zadejte svou odpověď.');

const answerTextElm = document.querySelector('.answer__text');
answerTextElm.textContent = answerUser;

const answerElm = document.querySelector('.answer');

if (answerUser === 'Bell' || answerUser === 'bell') {
    answerElm.classList.add('answer--correct');
} else {
    answerElm.classList.add('answer--wrong');
};


//když chci odpověď z promptu nastavit jako textContent elementu, tak si vytvořím proměnnou na prompt a další pomocí query - této pak nastavím textContent na proměnnou z promptu

