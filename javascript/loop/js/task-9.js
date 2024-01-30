{

    let i=1;
    let  j;

    while(i<=5)
    {
        j=1;
        while(j<=i)
        {
            document.write("* ");
            j++;
        }
        i++;
        document.write("<br>");
    }
}

{

    document.write("<br>" + "this is for loop " + "<br>");

    for(let i = 0; i<5 ; i++)
    {
        for(let j = 0; j<i ; j++)
        {
            document.write("# ");
        }
            document.write("<br>");
    }

}

{
    document.write("<br>" + "this is Do While loop " + "<br>");
    let i = 1 , j;
    
    do{
        j=1;
        do{
            j++;
            document.write("& ");
        }while(j<=i);
        i++;
        document.write("<br>");
    }while(i<=5);
}