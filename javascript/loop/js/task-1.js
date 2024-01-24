// for 
{
    document.write("for loop"  + "<br>");
for(let i = 10 ; i >= 0 ; i--)
{
    document.write(i);
    document.write("<br>");
}
}


// while 
{
    document.write("while loop " + "<br>");

    let i = 10;

    while(i>=0)
    {
        document.write(i);
        document.write("<br>");
        i--;
    }
    
}

{

    document.write("do while loop " + "<br>");

    let i = 10;

    do{
        document.write(i);
        document.write("<br>");
        i--;
    }while(i>=0);
}