/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

//1- Questo codice utilizza un ciclo for per ciclare usando il contatore i da 0 in avanti.
//2- Non ci sono errori di sintassi
//3- La condizione del ciclo i > 5 sarà sempre falsa in quanto i parte da zero, quindi il ciclo non verrà mai eseguito.


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

//1- Questa funzione prende come argomento un numero e se il numero è pari, ritorna il numero più 5, altrimenti ritorna il numero iniziale;
//2- Ci dovrebbe essere l'operatore di confronto === al posto di quello di assegnazione =
//3- Non ci sono errori di logica

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

//1- Questa funzione cicla da 0 a 4 stampando ogni volta i in console
//2- Al posto delle virgole nella condizione, ci dovrebbero essere i punti e virgola.
//3- Non ci sono apparenti errori di logica


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

//1- Questa funzione mostra i numeri pari di un array.
//2- Ci sono diversi errori di sintassi: riga 52: = invece che ===; riga 51, un ; in più alla fine dell'iterazione del ciclo for; riga 52, ; prima della graffa non serve;
//3- i deve essere minore o uguale a numbers.lenght. il return deve essere messo fuori dal ciclo for. evenNumbers.push(i) dovrebbe essere evenNumbers.push(numbers[i]); serve un console log prima di richiamare la funzione o non possiamo visualizzare i dati da nessuna parte. Questa condizione i < numbers.length - 1; fa ciclare i da 0 fino a lenght (8- 1) = 7, quindi non prenderebbe l'ultimo numero. il -1 non è necessario.