// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// Chiedere all'utente km e età

let km = parseInt(prompt("Inserisci il numero di km da percorrere"));
let eta = parseInt(prompt("Inserisci la tua età"));

console.log(km, eta);

// Calcolare prezzo biglietto (km*0.21)

let prezzo = km*0.21;

console.log(prezzo);

// Applicare sconto

let prezzoscontato;

if (eta<18) {
    prezzoscontato = prezzo - (prezzo*0.2);
} else if (eta>65) {
    prezzoscontato = prezzo - (prezzo*0.4);
} else {
    prezzoscontato = prezzo;
}

// Dare in output il prezzo del biglietto

console.log(prezzoscontato);

console.log(`Il prezzo del biglietto è di ${prezzoscontato.toFixed(2)}€`);

alert(`Il prezzo del biglietto è di ${prezzoscontato.toFixed(2)}€`);

