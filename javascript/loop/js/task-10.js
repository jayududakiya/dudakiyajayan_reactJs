{
    let x = 0 , num = prompt("enter Search number between 1 to 20 : "); 

    while(x<=20){
        x++;
        if(x == num)
        {
            
            document.write("your number is :" + x + "<br>");
            break;
        }
        document.write(" your number is Search...." + x +"<br>");
    }
}