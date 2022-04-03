/**
 * @file printfunctions.js
 * @author: Alessandro De Fano, Sebastiano Demichelis, Dario Di Maria, Giampietro Piras
 */

/**
 * formatta l'id dell'oggetto generato in precedenza
 * @param  {number} n l'id dell'oggetto
 * @param  {number} size la lunghezza della stringa totale
 * @returns  {string} id con padding
 */
function padId(n, size){
    let str=n+"";
    if(str.length<size){
        str=("00"+str).slice(-3);
    }
    return str;
}

/**
 * stampa tutti i prodotti
 * @param  {number} a quanti prodotti sugli scaffali ogni settimana
 * @param  {number} b dopo quanto tempo vengono rimossi i prodotti dagli scaffali
 * @param  {number} c contatore di settimane
 * @param  {date} d giorno di inizio del programma
 */
function printWeekly(a, b, c, d){
    for(let i=0; i<a*(c+1); i++){
        if(itemArray[i].expiration<=d){
            itemArray[i].state="Expired";
        }else if(itemArray[i].checks>0 && itemArray[i].checks<b){
            itemArray[i].state="Valid";
        }else if(itemArray[i].checks>=b){
            itemArray[i].state="Old";
        }

        if(itemArray[i].age>=0){
            if(itemArray[i].state=="New" || itemArray[i].state=="Valid"){
                console.log("%c" + padId(itemArray[i].id) + ": " + padString(itemArray[i].product, 16) + " " + formatDate(itemArray[i].expiration) + " " + padString(itemArray[i].state, 11) + " [" + itemArray[i].checks + " " + plural(i) + "]", "color: green");
            }else if(itemArray[i].state=="Old"){
                console.log("%c" + padId(itemArray[i].id) + ": " + padString(itemArray[i].product, 16) + " " + formatDate(itemArray[i].expiration) + " " + padString(itemArray[i].state, 11) + " [" + itemArray[i].checks + " " + plural(i) + "]", "color: yellow");
            }else{
                console.log("%c" + padId(itemArray[i].id) + ": " + padString(itemArray[i].product, 16) + " " + formatDate(itemArray[i].expiration) + " " + padString(itemArray[i].state, 11) + " [" + itemArray[i].checks + " " + plural(i) + "]", "color: red");
            }
        }
        itemArray[i].age++;
    }
}

/**
 * stampa solo i prodotti con stato "New" o "Valid"
 * @param  {number} a quanti prodotti sugli scaffali ogni settimana
 * @param  {number} b contatore di settimane
 */
function printWeeklyFiltered(a, b){
    for(let i=0; i<a*(b+1); i++){
        if(itemArray[i].state=="New" || itemArray[i].state=="Valid"){
            console.log("%c" + itemArray[i].id + ": " + padString(itemArray[i].product, 16) + " " + formatDate(itemArray[i].expiration) + " " + padString(itemArray[i].state, 11) + " [" + itemArray[i].checks + " " + plural(i) + "]", "color: green");

            itemArray[i].checks++;
        }
    }
}

/**
 * stampa "checks" se i checks sono più di 1, "check" se il check è uno solo
 * @param  {number} i elemento dell'array
 * @returns  {string} "check" o "checks"
 */
function plural(i){
    if(itemArray[i].checks==1){
        return "check ";
    }else{
        return "checks";
    }
}

/**
 * formatta il nome e lo stato dell'oggetto generati in precedenza
 * @param  {string} string il nome o lo stato dell'oggetto
 * @param  {number} size la lunghezza della stringa totale
 * @returns  {string} stringa con pad
 */
function padString(string, size){
    let d=size-string.length;
    let a=d/2;
    let r=d%2;
    string=string.padStart((string.length+a), "*");
    if (r===0){
        string=string.padEnd((string.length+a), "*");
    }else{
        string=string.padEnd((string.length+a+1), "*");
    }
    return string;
}