'use strict'

console.log('tutto ok');


// console.log(ticketResult);

// button
const buttonGenera = document.getElementById('genera-ticket');
const buttonAnnulla = document.getElementById('annulla-ticket');

console.dir(buttonGenera);
console.dir(buttonAnnulla);


//event listener
buttonGenera.addEventListener('click' , function () {
    console.log('ho cliccato su bottone genera');
    // element
    const ticketResult = document.getElementById('ticket-result');
    const carNumber =  Math.floor(Math.random() * 30) + 1;
    const codeNumber =  Math.floor(Math.random() * 90000000) + 10000000;
    // console.log(carNumber);
// input utente
    const usernameInput = document.getElementById('username-input');
    const kmInput = document.getElementById('km-input');
    const ageInput = document.getElementById('age-input');

    console.log(usernameInput.value);
    console.log(kmInput.value);
    console.log(ageInput.value);

    // console.log({ ageInput });

    
// output biglietto
    const usernameOutput = document.getElementById('username-output');
    const offerOutput = document.getElementById('offer-output');
    const carOutput = document.getElementById('car-output');
    const codeOutput = document.getElementById('code-output');
    const priceOutput = document.getElementById('price-output');

    console.dir(usernameOutput);
    console.dir(offerOutput);
    console.dir(carOutput);
    console.dir(codeOutput);
    console.dir(priceOutput);

// calcoli per prezzo biglietto

    const rate = 0.21;
    const discountUnder = 20;
    const discountOver = 40;
    let price = Number(kmInput.value * rate);
    let offerDescription ='Offerta standard';

    // console.log({ price });
   
// if

if (ageInput.value === 'under') {
    console.log('minorenne');
    price = Number(price - (price * discountUnder) / 100);
    offerDescription = 'Offerta under-18';
    // console.log(price);
} else if (ageInput.value === 'over') {
    console.log('over-65');
    price = Number(price - (price * discountOver) / 100);
    offerDescription =' Offerta Over-65';
    // console.log(price);
}
1
console.log(`${price.toFixed(2)} €`);


// mostrare ticket result

ticketResult.classList.remove('d-none');

//riempire campi biglietto

usernameOutput.innerText = usernameInput.value;
offerOutput.innerText = offerDescription;
priceOutput.innerText = `${price.toFixed(2)} €`;
carOutput.innerText = carNumber;
codeOutput.innerText = codeNumber;
}
)





buttonAnnulla.addEventListener('click' , function () {
    console.log('ho cliccato su bottone annulla');
    // element
    const ticketResult = document.getElementById('ticket-result');

    //nascondere ticket result

    ticketResult.classList.add('d-none');

    const usernameInput = document.getElementById('username-input');
    const kmInput = document.getElementById('km-input');
    const ageInput = document.getElementById('age-input');

    usernameInput.value = '';
    kmInput.value = '';
    ageInput.value = 'seleziona eta';

}
)








