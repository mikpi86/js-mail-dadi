/* inizializzo la variabile corrispondente alla email inserita dall'utente */
var eMailUtente = prompt('Digita il tuo indirizzo e-mail');
/* stampo */
console.log('e-mail utente: ' + eMailUtente);


/* creo una array corrispondente alla lista delle email */
var utentiIscritti = ['pincopanco@gmail.com', 'pancopinco@libero.it', 'sasa.prova01@yahoo.it'];

/* con il ciclo for do un valore ad ogni elemento dell' array */
for (var i = 0; i < utentiIscritti.length; i++) {
    console.log('Utente iscritto: ' + utentiIscritti[i]);

    /* inizializzo la variabile verifica */
    var verifica

    /* SE verifica identifica l'email utente all'interno della lista */
    if (verifica = utentiIscritti[i].includes(eMailUtente)) {
        console.log(verifica);
        /* l'alert dice che l'utente è già iscritto */
        alert('sei già iscritto');
    /* ALTRIMENTI */
    } else {
        /* l'alert dice che l'utente non è ancora iscritto */
        alert('non sei ancora iscritto');
    }
}

// NOTA: al momento l'alert esce tante volte quante sono le email da verificare