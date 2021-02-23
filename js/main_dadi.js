var nome = prompt("Ciao, sono GENNARO, BULLO. Tu come ti chiami?");
console.log(nome);

alert("Ok " + nome + ", sappi che sono il più forte giocatore di dadi. Non ci credi? Allora ti sfido! Tirerò il dado per primo per farti vedere come si fa. Chi fa il tiro più alto vince la partita. Sei pronto? 3...2...1...lancio!");

var lancioBullo = Math.floor((Math.random() * 6 ) + 1);
console.log(lancioBullo);

alert("Ho fatto " + lancioBullo + "! Ora tocca a te, vediamo che sai fare.");

var lancioUtente = Math.floor((Math.random() * 6) + 1);
console.log(lancioUtente);

alert("Hai fatto " + lancioUtente + "!");

if (lancioUtente < lancioBullo) {
    alert("ahahaha te l'avevo detto che sono il più forte! Vuoi la rivincita?");
    location.reload();
} else if (lancioUtente === lancioBullo) {
    alert("Mmh, un pareggio... Per caso stai barando? Riproviamo.");
    location.reload();
} else {
    alert("Beh, non darti tante arie. È la solita fortuna del principiante... Rivincita?");
    location.reload();
}