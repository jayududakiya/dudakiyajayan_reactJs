{

    let on = 1 ;

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