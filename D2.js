/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x1 = 5;
const x2 = 8;
if (x1 > x2) {
  console.log(x1 + " è maggiore");
} else {
  console.log(x2 + " è maggiore");
}

const numbers = ["2", "6"];
console.log(numbers);
if (numbers[1] > numbers[0]) {
  console.log(numbers[1] + " ", "è il numero maggiore");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(numbers);
if (numbers[1] === 5) {
  console.log("equal");
} else {
  console.log("not equal");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n20 = 20;
if (n20 % 5 === 0) {
  console.log(n20, "è divisibile per 5");
} else {
  console.log(n20, "non è divisibile");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n8 = 8;
let n16 = 16;
console.log(n16 - n8 === 8);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 35;
if (totalShoppingCart > 50) {
  console.log("il tuo totale è " + totalShoppingCart);
} else {
  console.log("il tuo totale è " + (totalShoppingCart + 10));
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sales = totalShoppingCart * 0.2;
let blackFriday = totalShoppingCart - sales;
console.log(blackFriday);
if (blackFriday > 50) {
  console.log("spedizione gratuita");
} else if (blackFriday <= 50) {
  console.log(blackFriday + 10);
} else {
  console.log("totale checkout comprese spese di spedizione");
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let var1 = 12;
let var2 = 14;
let var3 = 16;
const array = [12, 14, 16];

array.reverse();
console.log(array);
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let value = 35;
if (typeof value === "number") {
  console.log("il dato è un numero");
}

console.log(typeof value);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = 9;
if (num % 2 === 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// partiamo sempre a verificare il caso più specifico e poi si mettono le alternative
let val = 7;
if (val >= 10) {
  console.log("Uguale o maggiore di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("minore di 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);
console.log(me.city);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

// me.skills.splice(2, 1) --> altro metodo

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const arrayNumber = [];
arrayNumber.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arrayNumber.length);

//  oppure mettere i numeri uno alla volta facendo sempre push

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
arrayNumber.splice(9, 100);
arrayNumber.push(100);
console.log(arrayNumber);
/* SCRIVI QUI LA TUA RISPOSTA */
