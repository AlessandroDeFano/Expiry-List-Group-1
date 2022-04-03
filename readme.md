# Expiry List - Gruppo 1

## Final target
Javascript program that could be use in a supermarket to keep track products in the shelves.

## Exercise requirements

### Supermarket rules

1. expired items should be removed
2. items that have been on the shelf for more than N weeks should be removed
3. each week M new products arrive
4. the program should start from the current date plus K days and run for X weeks
5. each weekly list should be printed after a duration of R seconds
6. N,M,K,X,R should be configurable by the supermarket manager and should have meaningful variable names

### Item states

1. new - the item has arrived this week
2. valid - the item is not expired and has been on the shelf for LESS than N weeks 3. old - the item is not expired but has been on the shelf for MORE than N weeks 4. expired - the item has expired (the date is older than the current week date)

### Item structure

Each item should have:
1. a unique ID
2. a name
3. an expiration date
4. any other properties that you think are needed

## Approach to solution
We started thinking about how we can divide the functions in more than one file to make the code easier to understand and neater. So we created three different JavaScript files to divide the functions:

- datefunctions.js: functions needed for the date
- itemfunctions.js: functions needed to create the items
- printfunctions.js: functions needed to print

We focused on this project by creating and testing a single function at a time, making sure every function works correctly.

## File
- [README](readme.md)
- [Index](index.html)
- [Gruppo](gruppo.html)
- [Main](scripts/main.js)
- [DateFunctions](scripts/datefunctions.js) 
- [ItemFunctions](scripts/itemfunctions.js) 
- [PrintFunctions](scripts/printfunctions.js)
- [JSDoc](JSDoc/)
- [Stylesheet](styles/stylesheet.css)

## References
- [W3Schools](www.w3schools.com)
- [MDN](developer.mozilla.org)

## Browser compatibility
- Google Chrome v. 99.0.4844.84
- Apple Safari v. 15.4
- Opera GX v. 84.0
- Mozilla Firefox v. 98.0.2
- Microsoft Edge v. 100.0.1185.29

## Author
**Alessandro De Fano** (HTML & CSS files, JS files: "itemfunctions.js", "main.js") - alessandro.defano@edu.itspiemonte.it

**Sebastiano Demichelis** (JS files: "printfunctions.js", "datefunctions.js", "itemfunctions.js", "main.js") - sebastiano.demichelis@edu.itspiemonte.it

**Dario Di Maria** (JS files: "itemfunctions.js", "main.js") - dario.dimaria@edu.itspiemonte.it

**Giampietro Piras** (JS files: "datefunctions.js", "main.js") - giampietro.piras@edu.itspiemonte.it

ITS ICT Piemonte - Web Developer