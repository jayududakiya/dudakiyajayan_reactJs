{
    document.write("For loop" +"<br>");
   let i , sum = 0 ;
   
   for(i=1;i<=10;i++)
    {
        sum = sum + i;
        document.write(i + "<br>");
    }
    document.write("Total : " + sum + "<br> <br>");
}



{

    document.write("while loop" +"<br>");

    let i = 0 , sum = 0;
    while(i<=10)
    {
        document.write(i + "<br>");
        sum+=i;
        i++;
    }
    document.write("Total : " + sum + "<br>");


}


{

    document.write("do while loop" +"<br> <br>");

    let i = 0 , sum = 0;
    do
    {

        document.write(i + "<br>");
        sum+=i;
        i++;
    }while(i<=10);

    document.write("Total : " + sum + "<br>");


}