//Author: Vert, David
console.log("Hello JavaScript");


// VALUE OR DATA TYPES
console.log("Hello from JavaScript!");
console.log("Let's do some Math!");
console.log(4 + 7);
console.log(12 / 0);
console.log('Goodbye!');

// Variables
let a = 7;
console.log(a);

// Constants
const temp1 = 36.9;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1, temp2, temp3);
//temp3 = 9;

// Increment a number variable

let c = 0;
c += 1;
c++;
console.log(c);

//Variable scope

let num1 = 0;
{
    num1 = 1;
    const num2 = 0;
    console.log(num1);
}
//console.log(num2);

//Expressions
const d = 3;
let e = d;
e = e + 1;
console.log(e);

let f = 3 + 2 * 4;
console.log(f);
f = (3 + 2) * 4;
console.log(f);

//Template Literal
const country = "France";
console.log(`I live in ${country}`);
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`);

//Play ^-^
//x = scr;
//scr="Elfen.Lied.Lilium.music.box.mp3";
//var x = document.getElementById("Elfen.Lied.Lilium.music.box.mp3");
//p.play();
//var x = new Audio('Elfen.Lied.Lilium.music.box.mp3');
//x.play();
"dead"; {
  url : "Elfen.Lied.Lilium.music.box.mp3"
};

//abserve the following
console.log(4 + 5);
console.log("4 + 5");
console.log("4" + "5");
console.log(4 + "5");
const g = "five" * 2;
console.log(g, g, g, g, g);

//explicit conversion Number() or String()
const h = "5";
console.log(h + 1);
const i = Number(h);
console.log(i + 1);
const j = 6;
console.log("5" + String(j));
console.log(Number("dog"));

//Strict Equality Using ===
let num = 0;
let str = '0';

console.log(num === num);
console.log(str === str);
console.log(num === str);
console.log(num == str);

//Switch
const z = "abc";
switch (z) {
    case "abc":
        console.log("z = abc");
        break;
    case "def":
        console.log("z = def");
        break;
    default: 
        console.log("otherwise");
        break;
}

//while loop 
let numbers1 = 1;
while (numbers1 <= 5) {
    console.log(numbers1);
    numbers1++;
}

//For loop
//for (let i = 1; i < 10;) {
//    console.log(i);
//     i = i++;
//}