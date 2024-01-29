{
    let x = 0 , num=prompt("Skip numbers divisible by 5 using a do-while loop and continue statement " , "20");

    do{
        x++;
        if(x % 5 == 0)
        {
            continue;
        }
        document.write(x + " ");
    }while(x<num);
}
