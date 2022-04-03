/**
 * @file datefunctions.js
 * @author: Alessandro De Fano, Sebastiano Demichelis, Dario Di Maria, Giampietro Piras
 */

/**
 * genera la data di inizio del programma
 * @param  {number} b dopo quanti giorni inizia il programma
 * @returns  {date} data di inizio del programma
 */
function setProgramStart(b){
    let date=new Date();
    date.setDate(date.getDate()+b);

    return date;
}

/**
 * genera la massima scadenza di un prodotto
 * @param  {number} a quante settimane dura il programma
 * @returns  {date} data di scadenza massima di un prodotto
 */
function maxDateExpiry(a){
    let date=new Date();
    date.setDate(date.getDate()+(7*a));

    return date;
}

/**
 * genera la data di termine del prgramma
 * @param  {number} a quante settimane dura il programma
 * @param  {number} b dopo quanti giorni inizia il programma
 * @returns  {date} data di termine del programma
 */
function setProgramEnd(a, b){
    let date=new Date();
    date.setDate(date.getDate()+((7*a)+b));

    return date;
}

/**
 * formatta la data in italiano con mese in forma corta in inglese
 * @param  {date} date data
 * @return  {string} data in formato italiana con mese in forma corta inglese
 */
function formatDate(date){
    let dateNew=new Date(date);
    let months=["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    return ("0" + dateNew.getDate()).slice(-2) + "-" + months[dateNew.getMonth()] + "-" + dateNew.getFullYear();
}