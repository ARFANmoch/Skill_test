// Given variable string contains of all alphabet from A to Z
// ”ABCDEFGHIJKLMNOPQRSTUVWXYZ”

// Build a function that receive two paramters: first letter and last letter.
// That will do to find middle letter between of the specified letter.
// Example: 

// - The middle between Q and U is **S**
// - The middle between R and U is **ST**
// - The middle between T and Z is **W**
// - The middle between Q and Z is **UV** 
function hurufTengah(a, b) {
    let alpha1 = Alphabet.indexOf(a);
    let alpha2 = Alphabet.indexOf(b);
    let tengah = (alpha1 + alpha2) / 2;
    let letterLength;

    if (tengah % 2 == 0.5) {
        letterLength = 2;
    } else {
        letterLength = 1;
    }

    return Alphabet.substring(tengah, tengah + letterLength);
}

var Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(hurufTengah("Q", "U"));
console.log(hurufTengah("R", "U"));
console.log(hurufTengah("T", "Z"));
console.log(hurufTengah("Q", "Z"));