
//new variable that will remain constant
const kelvin = 0;
//celsius constant
const celsius = kelvin-273;
//new variable
let fahrenheit = celsius * (9 / 5) + 32;
//approximation
fahrenheit= Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degress in Fahrenheit.`);
//convert to Newton
let newton = celsius * (33/100);
//Round down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees in Newton.`);
