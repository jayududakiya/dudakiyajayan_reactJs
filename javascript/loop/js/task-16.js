{
    let x =prompt("Enter starting numbers " , "1") , num=prompt("Enter ending numbers " , "30");

    while(x<num){
        x++;
        if(x % 2 == 1)
        {
            continue;
        }
        document.write(x + " ");
    }
}