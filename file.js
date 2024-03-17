/*Ho svolto tutti gli esercizi richiesti, ho poi approfondito gli argomenti sugli Array e sulle sue proprietà(ho guardato anche il while ma non l'ho usato) 
Ho deciso di mettrmi alla prova inserendo tutti gli esercizzi con il relativo "codice esercizio" dentro un Array associativo ho poi creato delle card nel HTML e un input che prendesse in automatico il codice dell'esercizio che si voleva provare*/


/*Array Associativo contiene id, paragrafo che spiega l'esercizio, e la funzione che svolge l'esercizio */
const esercizi = [
    {
        id: "JSnack01",
        paragrafo: "L’utente inserisce due numeri in successione, con due prompt Il software stampa il maggiore",
        invocazione: function stampaIlMaggiore() {
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
    },
    {
        id: "JSnack02",
        paragrafo: "L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.",
        invocazione: function stampaParolaPiuCotra() {
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
    },
    {
        id: "JSnack03",
        paragrafo: "Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.",
        invocazione: function stampaLaSommaDeiNumeri() {
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

    },
    {
        id: "JSnack04",
        paragrafo: "In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.",
        invocazione: function ilGrandeGatsby() {
            let arrayGatsbSParty = ["gianni", "pinotto", "pippo", "bunny"];
            let utente = prompt("Inserisci il tuo nome");
            let utenteDaConfrontare = utente.toLowerCase();
            if (arrayGatsbSParty.includes(utenteDaConfrontare)) {
                alert("benvenuto " + utenteDaConfrontare)
            } else {
                alert("non sei in lista");
            }


        }
    },

    {
        id: "JSnack05",
        paragrafo: "Crea un array vuoto.Chiedi per 6 volte all’utente di inserire un numero,se è dispari inseriscilo nell’array. Stampa l'array alla fine.",
        invocazione: function stampaNumeroDispari() {
            let arrayNumeriDispari = [];
            for (let i = 0; i < 6; i++) {
                let utente = prompt("inserisci Numero")
                if (utente % 2 === 1) {
                    arrayNumeriDispari.push(utente);
                    console.log(arrayNumeriDispari);
                }
            }
        }
    },
    {
        id: "JSnack06",
        paragrafo: "Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero. Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti ha perso.",
        invocazione: function lotteria() {
            let numRandom = parseInt(Math.random() * 10);
            let utente = parseInt(prompt("inserisci un numero"));
            if (numRandom === utente) {
                alert("Hai Vinto");
            } else {
                alert("Ritenta");
            }
        },
    },
    {
        id: "JSnack07",
        paragrafo: "Scrivere un programma che stampi la tabellina del 2, fino al numero 1000. Modificate poi il programma in modo che venga chiesto all'utente il numero massimo consentito, e stampare tutta la tabellina del 2 fino al numero inserito.",
        invocazione: function tabellinaDelDue() {
            let n = parseInt(prompt("inserisci numero massimo"));
            for (let i = 2; i < n; i = i + 2) {
                console.log(i);
            }
        }
    },
    {
        id: "JSnack10",
        paragrafo: "Scrivere un programma a cui venga chiesto all'utente di inserire numeri uno dopo l'altro.Quando l'utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.",
        invocazione: function ilNumeroDoppione() {
            let n = prompt("Inserisci un Numero");
            for (let i = 0; i < n; i++) {
                let numeroInserito = prompt("Inserisci un Numero");
                if (numeroInserito === n) {
                    alert("Programma Terminato");
                }
            }
        }
    },

    {
        id: "JSnack11",
        paragrafo: "Creare una funzione che stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.Una volta creata la funzione chiedere all'utente di inserire N con un prompt e richiamate la funzione per dare la risposta all'utente.",
        invocazione: function ilCuboNumeriPrimi() {
            let array = [];
            let n = parseInt(prompt("iserisci un numero"));
            for (let i = 2; i <= n; i++) {
                let ePrimo = true;
                for (let y = 2; y < i; y++) {
                    if (i % y === 0) {
                        ePrimo = false;
                        break;
                    }
                }
                if (ePrimo) {
                    let cubo = i * i;
                    array.push(cubo);
                }
            } console.log(array);
        }
    },
    {
        id: "JSnack12",
        paragrafo: "Crea una funzione chiamata sommaNumeri che dato un array di 10 numeri definito da voi nel codice, ne calcoli la loro somma e la restituisca come risultato.Utilizzare la funzione sommaNumeri per stampare il risultato ottenuto.",
        invocazione: function sommaeMediaNumeri() {
            let sommaNumeri = 0;
            let arrauNum = [2, 5, 9, 10, 55, 89, 12, 45, 63, 77];
            for (let i = 0; i < arrauNum.length; i++) {
                sommaNumeri += arrauNum[i];
            } let media = sommaNumeri / arrauNum.length;
            console.log(media)
        }
    },
    {
        id: "JSnack13",
        paragrafo: "Crea una funzione chiamata sommaNumeri che dato un array di 10 numeri definito da voi nel codice, ne calcoli la loro somma e la restituisca come risultato.Utilizzare la funzione sommaNumeri per stampare il risultato ottenuto.",
        invocazione: function sommaeMediaNumeri() {
            let sommaNumeri = 0;
            let arrauNum = [2, 5, 9, 10, 55, 89, 12, 45, 63, 77];
            for (let i = 0; i < arrauNum.length; i++) {
                sommaNumeri += arrauNum[i];
            } let media = sommaNumeri / arrauNum.length;
            console.log(media)
        }
    },
    {
        id: "JSnack14",
        paragrafo: "Chiedi un numero di 4 cifre all’utente. Crea e usa una funzione che calcola la somma di tutte le cifre che compongono il numero e ritorni il risultato. Usa questa funzione per stampare poi a video il risultato ottenuto.",
        invocazione: function sommaDelleCifre() {
            let dividere = prompt("inserisci un numero di 4cifre per farne la somma");
            let somma = 0;
            for (let i = 0; i < dividere.length; i++) {
                let num = parseInt(dividere[i]);
                parseInt(somma += num);

            } console.log(somma)

        }

    },
]

/*Bottone al click verifica il contenuto del input e invoca la funzione che "estrapola" l'esercizio */

const btn = document.getElementById("btn");


const btnCerca = document.getElementById("inputGroup-sizing-sm");
btnCerca.addEventListener("click", (e) => {
    let input = document.getElementById("floatingInput").value
    estrapolaEsercizio(input);
})

let esercizioSelezionato = null;
btn.addEventListener("click", (e) => {
    if (esercizioSelezionato !== null) {
        invocaEsercizio(esercizioSelezionato);
    }
})


/*scorre tutto l'Array Associativo se l'id inserito nel input è uguale a uno degli id nell'array associativo prende l'esercizio */
function estrapolaEsercizio(inputValue) {
    esercizioSelezionato = null;

    for (let i = 0; i < esercizi.length; i++) {
        if (inputValue !== esercizi[i].id) {
            continue;
        } else {
            esercizioSelezionato = esercizi[i];
            prendiTestoEsercizio(esercizioSelezionato);
        }
    }
}


/*Prende l'esercizo dal''array e lo assovio al HTML */
function prendiTestoEsercizio(esercizio) {
    let idGioco = document.getElementById("idGioco");
    let paragrafo = document.getElementById("paragrafo");
    idGioco.textContent = esercizio.id;
    paragrafo.textContent = esercizio.paragrafo;
}


function invocaEsercizio(esercizio) {
    return esercizio.invocazione();
}

/*mi sono divertita tantissimo ad implementare questo esercizio e sono entusiasta di averlo fatto funzionare *-*  */


