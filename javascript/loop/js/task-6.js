{   
    let x = 0 , fact = prompt("Calculate factorial of a number using a while loop \n Enter number : ", "4" ) , sum = 1 ;

    while(x<fact)
    {
    // first time run :  " 4 " =  1  * ( 4 - 0 ) = 4; 
    // first time run :  " 12 " =  4  * ( 4 - 1 ) = 3; 
    // first time run :  " 24 " =  12  * ( 4 - 2 ) = 2; 
    // first time run :  " 24 " =  24  * ( 4 - 3 ) = 1; 
    // first time run :  " 0 " =  6  * ( 4 - 4 ) = 0; 
    sum = sum * (fact - x);
    x++;
}
document.write(fact + " factorial is : " + sum + " <br>");
}
