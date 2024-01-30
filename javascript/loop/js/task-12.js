{
    // program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.write(`${number} is a prime number`);
    } else {
        document.write(`${number} is a not prime number`);
    }

}