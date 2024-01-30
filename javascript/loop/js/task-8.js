{
    // document.write(num**power);
    let num = prompt("Calculate the power of a number using a while loop \n Enter number : " , "4")  , power = 1 ;

    // while loop 
    let i =1;
    while(i<=3)
    {
        i++;
        power*=num;
    }

    document.write("While loop [" +num + "] power is : " + power);  

    // Do while loop 
    let i1 =1;
    power = 1;
    do
    {
        i1++;
        power*=num;
    }while(i1<=3)

    document.write("<br>" + "Do while loop ["+ num + "] power is : " + power);  

    // For loop 
    let i2;
    power = 1;
    for(i2=0;i2<3;i2++)
    {
        power*=num;
    }
    document.write("<br>" + "For loop [" + num + "] power is : " + power);  
}