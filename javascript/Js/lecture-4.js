{
    var h1_tag = document.createElement("h1");
    h1_tag.textContent=" > this while loop with syntax : ";
    document.body.appendChild(h1_tag);
}


{
    document.write(" while(' conditione ') {' ('increment'); code to be executed' } " + "<br> <br>");

    let i = 0;
    while(i<=5)
    {
        document.write("number - " + i + "<br>");
        i++;
    }
}

{
    var h1_tag = document.createElement("h1");
    h1_tag.textContent=" > this Do while loop with syntax : ";
    document.body.appendChild(h1_tag);
}


{

    document.write(" do {'('increment');code To be executed' }while(' conditione '); " + "<br> <br>");

    let i = 0;
   do{
    i++;
    document.write("number - " + i + "<br>");
   }while(i<5);

}



{
    var h1_tag = document.createElement("h1");
    h1_tag.textContent=" > this for loop with syntax : ";
    document.body.appendChild(h1_tag);
}


{

    document.write(" for(' initialization ;  conditione ; increment '){' code to be executed' } " + "<br> <br>");
    for(let i = 0;i<=5;i++)
    {
        document.write("number - " + i + "<br>");
    }

}