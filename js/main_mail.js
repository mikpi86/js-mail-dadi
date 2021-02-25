/* inizializzo la variabile corrispondente alla email inserita dall'utente */
var eMailUtente = prompt('Digita il tuo indirizzo e-mail');
/* stampo */
console.log('e-mail utente: ' + eMailUtente);


/* creo una array corrispondente alla lista delle email */
var utentiIscritti = ['pincopanco@gmail.com', 'pancopinco@libero.it', 'sasa.prova01@yahoo.it'];

/* inserisco un booleano per limitare la stampa degli alert ad una sola volta dopo aver completato il ciclo */
var eMailRegistrata = false;

/* con il ciclo for do un valore ad ogni elemento dell' array */
for (var i = 0; i < utentiIscritti.length; i++) {
    /* se l'email utente è presente nell'array assegno valore true */
    if (eMailUtente == utentiIscritti[i]) {
        eMailRegistrata = true;
    }
}

/* se la condizione è true */
if (eMailRegistrata == true) {
    /* l'alert dice che l'utente è già iscritto */
    alert('sei già iscritto');
/* altrimenti */
} else {
    /* l'alert dice che l'utente non è ancora iscritto */
    alert('non sei ancora iscritto');
}