/*01 L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

//Invoca la funzione per provare l'esercizio
function stampaIlMaggiore() {
    const arrayNum = [];
    let n = 2
    for (let i = 0; i < n; i++) {
        const numeroIserito = parseInt(prompt("Inserisci un Numero"));
        arrayNum.push(numeroIserito);
        let maggiore = arrayNum[0];
        if (isNaN) {
            alert("inserisci solo numeri");
        }
        else if (maggiore < arrayNum[i]) {
            maggiore = arrayNum[i];
            console.log(maggiore);
        }
    }
}


/* 02  L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

//Invoca la funzione per provare l'esercizio
function stampaParolaPiuCotra() {
    arrayStinghe = [];
    let n = 2
    for (let i = 0; i < n; i++) {
        let parola = prompt("inserisci parola")
        arrayStinghe.push(parola);
        let parolapiuCorta = arrayStinghe[0];
        if (!isNaN) {
            alert("Inseirisci una parola")
        } else if (parolapiuCorta > arrayStinghe[i]) {
            parolapiuCorta = arrayStinghe[i];
            console.log(parolapiuCorta);

        }

    }
}


/* 03  Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

//Invoca la funzione per provare l'esercizio
function stampaLaSommaDeiNumeri() {
    let arrayNumeriDaSommare = [];
    let somma = 0;
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt("inserici un numero"));
        arrayNumeriDaSommare.push(numero);

        if (!isNaN) {
            alert("devi inserire un numero");
        } else {
            somma += arrayNumeriDaSommare[i];
        }
    }
    console.log(somma)
}

/* 04 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

//Invoca la funzione per provare l'esercizio
function ilGrandeGatsby() {
    let arrayGatsbSParty = ["gianni", "pinotto", "pippo", "bunny"];
    let utente = prompt("Inserisci il tuo nome");
    let utenteDaConfrontare = utente.toLowerCase();
    if (arrayGatsbSParty.includes(utenteDaConfrontare)) {
        alert("benvenuto " + utenteDaConfrontare)
    } else {
        alert("non sei in lista");
    }


}


/* 05 Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine. */

//Invoca la funzione per provare l'esercizio

function stampaNumeroDispari() {
    let arrayNumeriDispari = [];
    for (let i = 0; i < 6; i++) {
        let utente = prompt("inserisci Numero")
        if (utente % 2 === 1) {
            arrayNumeriDispari.push(utente);
            console.log(arrayNumeriDispari);
        }
    }
}


/* 06 Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero. Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti ha perso. */

//Invoca la funzione per provare l'esercizio
function lotteria() {
    let numRandom = parseInt(Math.random() * 10);
    let utente = parseInt(prompt("inserisci un numero"));
    if (numRandom === utente) {
        alert("Hai Vinto");
    } else {
        alert("Ritenta");
    }
}



/*JSnack07 Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
Modificate poi il programma in modo che venga chiesto all'utente il numero massimo consentito, e stampare tutta la tabellina del 2 fino al numero inserito.*/

//Invoca la funzione per provare l'esercizio

function tabellinaDelDue() {
    let n = parseInt(prompt("inserisci numero massimo"));
    for (let i = 2; i < n; i = i + 2) {
        console.log(i);
    }
}



/*JSnack10 Scrivere un programma a cui venga chiesto all'utente di inserire numeri uno dopo l'altro.
Quando l'utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.*/

//Invoca la funzione per provare l'esercizio
function ilNumeroDoppione() {
    let n = prompt("Inserisci un Numero");
    for (let i = 0; i < n; i++) {
        let numeroInserito = prompt("Inserisci un Numero");
        if (numeroInserito === n) {
            alert("Programma Terminato");
        }
    }
}



/*JSnack11 Creare una funzione che stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
 Una volta creata la funzione chiedere all'utente di inserire N con un 
 prompt e richiamate la funzione per dare la risposta all'utente.  */

//Invoca la funzione per provare l'esercizio
function ilCuboNumeriPrimi() {

}


/*JSnack12 & JSnack13 Crea una funzione chiamata sommaNumeri che dato un array di 10 numeri
 definito da voi nel codice, ne calcoli la loro somma e la restituisca come risultato.
 Utilizzare la funzione sommaNumeri per stampare il risultato ottenuto. */

//Invoca la funzione per provare l'esercizio
function sommaeMediaNumeri() {
    let sommaNumeri = 0;
    let arrauNum = [2, 5, 9, 10, 55, 89, 12, 45, 63, 77];
    for (let i = 0; i < arrauNum.length; i++) {
        sommaNumeri += arrauNum[i];
    } let media = sommaNumeri / arrauNum.length;
    console.log(media)
}


/*JSnack14 Chiedi un numero di 4 cifre all’utente. Crea e usa una funzione che 
calcola la somma di tutte le cifre che compongono il numero e ritorni il risultato. 
Usa questa funzione per stampare poi a video il risultato ottenuto.*/

//Invoca la funzione per provare l'esercizio
function sommaDelleCifre() {
    let dividere = prompt("inserisci un numero di 4cifre per farne la somma");
    let somma = 0;
    for (let i = 0; i < dividere.length; i++) {
        let num = parseInt(dividere[i]);
        parseInt(somma+=num);
        
    }console.log(somma)

}
