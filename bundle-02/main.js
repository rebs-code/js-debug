/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

//1- Questa funzione controlla l'età di una persona in numero e restituisce un messaggio controllando se la persona è minorenne o meno.
//2- Non ci sono errori di sintassi
//2- L'età non dovrebbe essere dentro la funzione ma dichiarata fuori, la funzione deve accettare un argomento (eta) per poter funzionare, altrimenti darà sempre lo stesso risultato. Inoltre, non c'è alcun return né console log, quindi il messaggio non sarà mai visibile. message deve essere inizializzato come let e non const.

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

//1- Questa funzione stampa in console il numero di colori presenti nell'array.
//2-3 Non ha senso dichiarare l'array dentro la funzione, andrebbe dichiarato fuori dalla stessa e messo come argomento della funzione. Inoltre non ha senso controllare tramite array.length perché i colori potrebbero ripetersi all'interno dell'array ma verrebbero comunque conteggiati. Length è anche scritto sbagliato.


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

//1- questa funzione somma un numero input con 12 e stampa in console il risultato finale.
//2- Non ci sono errori di sintassi.
//3- Il numero nel campo di input deve essere convertito in un valore numerico poiché così è una stringa.


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

//1- Questa funzione controlla se un utente può accedere attraverso una determinata email e stampa due messaggi in console.
//2- Riga 60, false dovrebbe essere un valore booleano e non una stringa. Stessa cosa a riga 63.
//3- gli array devono essere fuori dalla funzione in quanto non ha senso dichiararli dentro. Poi non servono due if, ne basta uno.


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }}
    checkAccessImproved();

//1- Queta funzione fa la stessa cosa di quella di sopra ma meglio.
//2- False non deve essere una stringa ma un valore booleano a riga 85, manca una graffa a riga 104
//3 manca un break dopo che l'accesso è true



























