// Ciao ragazzi,
// esercizio di oggi: calcolo del prezzo del biglietto del treno
// Cartella / Repo: js-biglietto-treno-formDescrizione:
// Scrivere un programma che chieda all’utente:

//     Il numero di chilometri da percorrere
//     Età del passeggero

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

//     il prezzo del biglietto è definito in base ai km (0.21 € al km)
//     va applicato uno sconto del 20% per i minorenni
//     va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.Ricordate: il primo push dovrà essere un file README.md contenente la risoluzione dell’esercizio in linguaggio naturale!Buon lavoro!












// // calcolo del prezzo del biglietto del treno

// // - definisco una variabile che chiede quanti km vuole percorrere il passeggero e salvo il valore di un prompt; //kmPassenger

// const kmPassenger = Number(prompt('inserisci qui i km che vuoi percorrere'));
// console.log({ kmPassenger });

// // - definisco una variabile che chiede l'età al passeggero e salvo il valore di un prompt; //age

// const age = parseInt(prompt('inserisci qui la tua età'));
// console.log({ age });


// // - salvo prezzo unitario dei km in una variabile //rate

// const rate = 0.21;
// console.log(`tariffa al km: ${ rate } €`);

// // - definisco una variabile che calcola il prezzo totale del biglietto; //price
// // - definisco lo sconto iniziale pari a zero //
// let price = Number(kmPassenger * rate);
// // console.log('prezzo biglietto:', price);
// let priceDiscount = 0;

// // - imposto variabile che definisce eta minorenni //ageUnder
// // - imposto variabile che definisce eta maggiorenni //ageOver
// const ageUnder = 18;
// const ageOver = 65;

// // - setto una variabile sconto del 20% //discountUnder=20
// // - setto una variabile sconto del 40% //discountOver=40
// const discountUnder = 20;
// const discountOver = 40;


// if (age < ageUnder) {
//     console.log('utente è minorenne, calcolo sconto del 20%');
    
//     priceDiscount = (price / 100 * discountUnder);
//     console.log('sconto €:', priceDiscount);
// } else if (age > ageOver) {
//     console.log('utente è maggiorenne, calcolo sconto del 40%');

//     priceDiscount = Number(price * discountOver) / 100;
//     console.log('sconto €:', priceDiscount);
// }

// // cambio varibile let price

// price -= priceDiscount;

// console.log(`il prezzo finale del biglietto è ${price.toFixed(2)} €`);