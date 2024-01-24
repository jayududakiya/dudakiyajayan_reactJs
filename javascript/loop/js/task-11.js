


{
    let i = prompt("Find the first odd number in a sequence using a while loop and break statement \n Enter a starting number value : " ) , num = prompt("enter a ending number value : " );  

    while(i<=num)
    {
        i++;
        if(1 == i%2)
        {
            document.write(" the first odd number is " + i );
            break ;
        }
        // document.write(i);
    }

}