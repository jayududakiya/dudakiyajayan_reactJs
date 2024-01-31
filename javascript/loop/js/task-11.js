


{
    let i = parseInt(prompt("Find the first odd number in a sequence using a while loop and break statement \n Enter a starting number value : " ) ), num = parseInt(prompt("enter a ending number value : " ));  

    //let i = 5 , num=10;


    while(i<=num)
    {
        if(i%2 !== 0)
        {
            document.write(" the first odd number is " + i );
            break ;
        }
        i++;
    }

}