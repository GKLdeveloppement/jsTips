/*
Ce qu'il faut savoir sur NaN : 
    
    0) NaN représente le résultat d'une opération arithmétique qui est invalide.

    1) Pour beaucoup NaN = Not a Number, pourtant NaN est de type "number".

    2) On ne peut pas comparer NaN à lui-même directement.
*/

//#0
    const whatIsNaN = 1 / "a"
    console.log("#0 - tu peux avoir un NaN comme cela : 1 / a = " + whatIsNaN);

//#1
    console.log("#1 - le type de NaN est : "+typeof NaN);

//#2
    if (NaN === NaN) {
        console.log("On ne passera jamais ici");
    } else {
        console.log("Mais toujours ici");
    }
    //Car pour comparer on fait comme ça :
    if (Number.isNaN(NaN)) {
        console.log("Oui je suis NaN. :)");
    }
