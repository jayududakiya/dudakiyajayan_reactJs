
// var n = 352, reverse = 0, remainder;

// while (n>0) {
//     remainder = n%10;
//     reverse = reverse * 10 + remainder;
//     n = n / 10;
//     // n++;
// }

// console.log(reverse);


let number = 321;

let num = number;

// Initializing the result variable 
let result = 0;
let rightmost = 0;

while(number>0){
    // Getting the rightmost digit
    rightmost = number%10;
    
    // Store number in to variable 
    result = result*10 + rightmost;
    
    // Removing the rightmost digit from the number
    number = Number.parseInt(number/10);
}

console.log(`number is ${num} reveres number is ${result}`)
