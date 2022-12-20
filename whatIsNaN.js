/*
Ce qu'il faut savoir sur NaN : 

    1) Pour beaucoup NaN = Not a Number, pourtant NaN est de type "number".

    2) NaN représente le résultat d'une opération arithmétique qui est nulle.

    3) On ne peut pas comparer NaN à lui-même directement.

*/

console.log("le type de NaN est : "+typeof NaN);
if (NaN === NaN) {
    console.log("OK");
} else {
    console.log("not equal");
}

if (Number.NaN == NaN) {
    console.log("hey");
}
