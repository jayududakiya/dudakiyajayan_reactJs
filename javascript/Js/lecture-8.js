console.log("Maths Objects Method");

console.log("\n");

// Math.PI;

let M1 = Math.PI;
console.log(`this is Math.PT > ${M1}`);

console.log("\n");

// Math.E;

let M2 = Math.E;
console.log(`this is Math.E > ${M2}`);

M2 = Math.LOG2E;
M2 = Math.LOG10E;
console.log(`this is Math.E > ${M2}`);


console.log("\n");

//Math.round():-

let M4 = Math.round(21.4);
let M5 = Math.round(21.5);
let M6 = Math.round(-24.5);
let M7 = Math.round(-23.6);

console.log(`this is Math.round(21.4) > ${M4}`);
console.log(`this is Math.round(21.5) > ${M5}`);
console.log(`this is Math.round(-24.5) > ${M6}`);
console.log(`this is Math.round(-23.6) > ${M7}`);

console.log("\n");

// Math.ceil()


let M8 = Math.round(20.4);
let M9 = Math.round(20.5);
let M10 = Math.round(-33.5);
let M11 = Math.round(-34.6);


console.log(`this is Math.ceil(20.4) > ${M8}`);
console.log(`this is Math.ceil(20.5) > ${M9}`);
console.log(`this is Math.ceil(-33.5) > ${M10}`);
console.log(`this is Math.ceil(-34.6) > ${M11}`);

console.log("\n");

// Math..floor()


let M12 = Math.floor(20.1);
let M13 = Math.floor(20.8);
let M14 = Math.floor(-33.1);
let M15 = Math.floor(-34.9);


console.log(`this is Math..floor(20.1) > ${M12}`);
console.log(`this is Math..floor(20.8) > ${M13}`);
console.log(`this is Math..floor(-33.1) > ${M14}`);
console.log(`this is Math..floor(-34.9) > ${M15}`);

console.log("\n");


// Math.trunc();

let M16 = Math.trunc(20.1);
let M17 = Math.trunc(20.999998);
let M18 = Math.trunc(-33.1);
let M19 = Math.trunc(-34.9);


console.log(`this is Math.trunc(20.1) > ${M16}`);
console.log(`this is Math.trunc(20.99998) > ${M17}`);
console.log(`this is Math.trunc(-33.1) > ${M18}`);
console.log(`this is Math.trunc(-34.9) > ${M19}`);

console.log("\n");


// Math.sign();

let M20 = Math.sign(-20.6);
let M21 = Math.sign(-20.1);
let M22 = Math.sign(20.6);
let M23 = Math.sign(20.2);
let M24 = Math.sign(null);
let M25 = Math.sign(-0);


console.log(`this is Math.sign(-20.6) > ${M20}`);
console.log(`this is Math.sign(-20.1) > ${M21}`);
console.log(`this is Math.sign(20.6) > ${M22}`);
console.log(`this is Math.sign(20.2) > ${M23}`);
console.log(`this is Math.sign(null) > ${M24}`);
console.log(`this is Math.sign(-0) > ${M25}`);

console.log("\n");


// Math.pow();

let M26 = Math.pow(2, 5);
let M27 = Math.pow(-2 , 5);
let M28 = Math.pow(-2 , -5);
let M29 = Math.pow(2 , -5);


console.log(`this is Math.pow(2 , 5) > ${M26}`);
console.log(`this is Math.pow(-2 , 5) > ${M27}`);
console.log(`this is Math.pow(-2 , -5) > ${M28}`);
console.log(`this is Math.pow(2 , -5) > ${M29}`);

console.log("\n");

//Math.sqrt():-

let M30  = Math.sqrt(-0);
let M31  = Math.sqrt(121);
let M32  = Math.sqrt(64);
let M33  = Math.sqrt(-121);

console.log(`this is Math.sqrt(-0) > ${M30}`);
console.log(`this is Math.sqrt(121) > ${M31}`);
console.log(`this is Math.sqrt(64) > ${M32}`);
console.log(`this is Math.sqrt(-121) > ${M33}`);


console.log("\n");

// Math.abs();

let M34 = Math.abs(0);
let M35 = Math.abs(-0);
let M36 = Math.abs(-10);
let M37 = Math.abs(-10.21);

console.log(`this is Math.abs(0) > ${M34}`);
console.log(`this is Math.abs(-0) > ${M35}`);
console.log(`this is Math.abs(-10) > ${M36}`);
console.log(`this is Math.abs(-10.21) > ${M37}`);

console.log("\n");


// Math.min(); and Math.max();

let M38 = Math.min(1 , -1 , -30 ,-30 , 50 , 55);
let M39 = Math.max(1 , -1 , 20 , 20 , 55 , 55);

console.log(` Math.min(1 , -1 , -30 ,-30 , 50 , 55) >  ${M38}`);
console.log(` Math.max(1 , -1 , 20 ,20 , 55 , 55) > ${M39}`);

console.log("\n");


//Math.random():-

//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive).


let randomNum = Math.random()
let randomNum1 = Math.random()*10
let randomNum2 = Math.random()*100
let randomNum3 = Math.random()*1000
let randomNum4 = Math.random()*10000

console.log(`this is Math.random()>  ${randomNum}`);
console.log(`this is Math.random()*10 >  ${randomNum1}`);
console.log(`this is Math.random()*100 >  ${randomNum2}`);
console.log(`this is Math.random()*1000 >  ${randomNum3}`);

console.log(`this is Math.random()*10000  this is give a digits number >  ${randomNum4}`);


console.log(`this is otp generator in alert  \n `);

let createNum = Math.random()*10000;

const OTP = parseInt(createNum);

let ShowOPT =`Your 4 digits OTP is " ${OTP} " Pleas Don't share with any on you don't now`;

confirm(ShowOPT);





