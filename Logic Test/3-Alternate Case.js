/*Alternate each case of each of string given 

alternateCase("abc")            => "ABC"
alternateCase("ABC")            => "abc"
alternateCase("Hello World")    => "hELLO wORLD"*/

const name0  = 'abc';
const name1  = 'ABC'; 
let hasil;
let hasil2;
let name3  = "Hallo";
let name4  = "World";
    hasil  = name0.toUpperCase();
    hasil2 = name1.toLowerCase();
    name   = name3[0].toLowerCase() + name3.slice(1).toUpperCase() + 
             ' ' + name4[0].toLowerCase() + name4.slice(1).toUpperCase();

console.log(hasil);
console.log(hasil2);
console.log(name);