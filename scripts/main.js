/**
 * @file main.js
 * @author: Alessandro De Fano, Sebastiano Demichelis, Dario Di Maria, Giampietro Piras
 */

//oggetto di configurazione
var config={
    programStart: 5,            //dopo quanti giorni deve iniziare il programma?
    itemsPerWeek: 3,            //quanti articoli vengono aggiunti ogni settimana?
    nWeeks: 15,                 //per quante settimane deve funzionare il programma?
    removeItems: 5,             //dopo quante settimana gli articoli vengono eliminati?
    secMin: 2,                  //numero minimo di secondi tra due stampe
    secMax: 5                   //numero massimo di secondi tra due stampe
};

/**
 * sceglie un numero in modo casuale
 * @param  {number} min numero minimo
 * @param  {number} max numero massimo
 * @returns  {number} numero casuale tra min e max
 */
function random(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

//inizializzazione variabili
let r=random(config.secMin, config.secMax);
let startExpiration=new Date();
let startDate=setProgramStart(config.programStart);
let endExpiration=maxDateExpiry(config.nWeeks);
let endDate=setProgramEnd(config.nWeeks, config.programStart);
let i=0;
let weekStart=setProgramStart(config.programStart);
let weekEnd=new Date(weekStart.getTime());
weekEnd.setDate(weekEnd.getDate()+6);

//stampe iniziali
console.info("The program starts in " + config.programStart + " days");
console.info("The program inserts " + config.itemsPerWeek + " products per week");
console.info("The program lasts " + config.nWeeks + " weeks");
console.info("The products are removed after " + config.removeItems + " weeks");
console.info("You will wait " + r + " seconds between each print");

//inizializzazione array item
let items = ["Pizza", "Pasta", "Onion", "Kebab", "Apple", "Butter", "Pepper", "Yogurt", "Banana", "Fanta", "Meat", "Egg", "Milk", "Water", "Cannolo", "Salt", "Sugar", "Chips", "Watermelon", "Pepsi"];

let itemArray=[];

itemArray=pushItem(config.itemsPerWeek, config.nWeeks);

//funzione di stampa
function print(){
    console.log("%cWeek from " + formatDate(weekStart) + " to " + formatDate(weekEnd), "color: blue");

    printWeekly(config.itemsPerWeek, config.removeItems, i, weekStart);

    console.log("%cFiltered: ", "color: blue");

    printWeeklyFiltered(config.itemsPerWeek, i);

    weekStart.setDate(weekStart.getDate()+7);
    weekEnd.setDate(weekEnd.getDate()+7);
}

if(r==0){
    for(i=0; i<config.nWeeks; i++){
        print();
    }
}else{
    let timerID=setInterval(()=>{
            print();
            i++;
        }, r*1000);
    
    setTimeout(()=>{
        clearInterval(timerID);
    }, r*config.nWeeks*1000);
}
