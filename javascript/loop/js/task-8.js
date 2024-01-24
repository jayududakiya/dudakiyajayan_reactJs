{
    // document.write(num**power);
    let num = prompt("Calculate the power of a number using a while loop \n Enter number : " , "4") , i = 1 , power = 1 ;

    while(i<=3)
    {
        i++;
        power*=num;
    }

    document.write(num + " power is : " + power);  
}