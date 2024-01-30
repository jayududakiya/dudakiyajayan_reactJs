{
   const number = 3;
   let x = 0 , num=0 ;
   while(x<10)
   {
    x++;
     if(num == number)
     {
        document.write( "<hr>" +"Right number is you win : " + number);
        break;
     }
     else
     {
        document.write(x + ". " +"your chosen number is : " + num + "<br>");
        num = prompt(`Guess the number game \n Guess Number in 10 chance \n chance : ${x} `);  
      //   document.write("your loos "+ "<br>");
     }
   }
}