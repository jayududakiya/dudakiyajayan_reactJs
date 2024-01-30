{
  let a,
    b = 0,
    c = 1;

//   let on = prompt(`Enter\n 1 . ForLoop \n 2 . While loop \n 3 . Do while`);
  let on = 1;

  switch (on) {
    case 1 :
      document.write("for : ");
      document.write(b + " " + c);
      for (a = 1; a <= 10; a++) {
        a = b;
        b = c;
        c = a + b;
        document.write(" " + c + " ");
      }
      break;

    case 2 :
      document.write("while : ");
      document.write(b + " " + c);
      let a1 = 1;
      while (a1 <= 10) {
        a1 = b;
        b = c;
        c = a1 + b;
        a1++;
        document.write(" " + c + " ");
      }

      break;

    case 3 :
      document.write("Do while :");
      document.write(b + " " + c);
      let a2 = 1;
      do {
        a2++;
        a2 = b;
        b = c;
        c = a2 + b;
        document.write(" " + c + " ");
      } while (a2 <= 10);

      break;
      default :
      document.write("Enter valid Input : ")
      break;
  }
}
