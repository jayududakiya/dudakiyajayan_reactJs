{

  var on;
  on = parseInt(prompt("Choose Number" , ));
    switch (on) {
      case 1:
        document.write("this is For loop " + "<br>");
        link: for (let i = 1; i <= 10; i++) {
          document.write("<br>");
          for (let j = 1; j <= 10; j++) {
            if (i == 11) {
              break link;
            }

            document.write(i + "x" + j + "=" + i * j);
            document.write("<br>");
          }
        }
        break;

      case 2:

         document.write("this is while loop "+"<br>");
         let x = 1 ;
         link1 : while (x<=10)
         {
            document.write("<br>");
            let y = 0;
            while(y<10)
            {

                if(x==11)
                {
                    break link1;
                }
                y++;
                document.write(x + "x" + y + "=" + x*y);
                document.write("<br>");
            }
            x++;
         }

        break;

        case 3 : 

            document.write("this is DO while loop " + "<br>");
            let a = 1;

            link3: do {
            document.write("<br>");
            let b = 0;
            do {
                b++;
                document.write(a + "x" + b + "=" + a * b);
                document.write("<br>");
                if (a == 11) {
                break link3;
                }
            } while (b < 10);
            a++;
            } while (a <= 10);

        break ;

      default:
        document.write("Enter valid input ");
        break;
    }




}


// {
//   var yourchoice;
// yourchoice = prompt("Choose a number between 1 and 4", "1, 2, 3 or 4")
// switch (yourchoice)
// {
//     case "1":
//         document.write("You typed in a 1");
//         break;
//     case "2":
//         alert("You typed in a 2");
//         break;
//     case "3":
//         alert("You typed in a 3");
//         break;
//     case "4":
//         alert("You typed in a 4");
//         break;
// }
// }

// {

//   var x ;
//   x = prompt("choose Number", ); 

//   switch(x){
//     case 1: document.write("Hello Javascript")
//   }


// }