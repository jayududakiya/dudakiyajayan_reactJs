{
   const number = 3;
   let x = 0 , num = prompt("Guess the number game \n we give you a 10 chance : ");  
//    let sum = num * 10 ;
   while(x<=10)
   {
    x++;
     if(num == number )
     {
        document.write( "<hr>" +"Right number is you win : " + number);
        break;
     }
     document.write(x + ". " +"your chosen number is : " + num + "<br>");
     num = prompt("Guess the number game \n we give you a 10 chance : ");  
   }
}