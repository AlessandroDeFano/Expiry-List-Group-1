/**
 * @file itemfunctions.js
 * @author: Alessandro De Fano, Sebastiano Demichelis, Dario Di Maria, Giampietro Piras
 */

let countId=1;

/**
 * genera un'identificativo per ogni oggetto dell'array
 * @returns  {number} id dell'oggetto
 */
function idGenerator(){
    return padId(countId++, 3);
}

/**
 * genera un nome casuale tra quelli presenti nell'array "items" nel main.js da assegnare a ogni oggetto dell'array
 * @returns  {string} nome generato
 */
function nameGenerator(){
    return items[Math.floor(Math.random()*items.length)];
}

/**
 * genera una data di scadenza in modo casuale tra due date passate in ingresso
 * @param  {date} start data di partenza
 * @param  {date} end data di fine
 * @returns  {date} data di scadenza da assegnare a ogni oggetto dell'array
 */
function expirationDateGenerator(start, end){
    return new Date(+start+Math.random()*(end-start));
}

/**
 * crea un array con tutti i dettagli del prodotto e lo sposta dentro ad "itemArray"
 * @param  {number} a numero prodotti che vengono aggiunti ogni settimana
 * @param  {number} b quante settimane dura il programma
 * @returns  {array} ritorna un elemento dell'array
 */
function pushItem(a, b){
    let i;
    let arrayItem=[];

    for(i=0; i<(a*b); i++){
        arrayItem[i]={
            id: idGenerator(),
            product: nameGenerator(),
            expiration: expirationDateGenerator(startExpiration, endExpiration),
            checks: 0,
            state: "New",
            age: 0
        }
    }
    return arrayItem;
}