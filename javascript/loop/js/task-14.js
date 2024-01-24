{

    let x , num = prompt("Skip printing odd numbers using a for loop and continue statement \n Enter ending number : " );

    for(x=0;x<num;x++)
    {
        if(x%2==0)
        {
            continue;
        }
        document.write( x +" ");
    }

}