{
    let x = 0 , num=prompt("Skip multiples of 3 using a while loop and continue statement","30");

    while(x<num){
        x++;
        if(x % 3 == 0)
        {
            continue;
        }
        document.write(x + " ");
    }
}