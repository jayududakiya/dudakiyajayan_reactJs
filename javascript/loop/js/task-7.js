{
    // Check if a word is a palindrome using a while loop 

    let i , n =33;

    if(n<10)
    {
        for(i=0;i<10;i++)
        {
            if(i!=n)
            {
                // document.write("your number is not between 1 to 9 mech " + n + "<br>");
                continue;
            }
            else
            {
                document.write(i + "<br>");
            }
        }
    }
    else
    {
        for(i=10;i<100;i++)
        {
            if(i-i==0 && i == n)
            {
                document.write("this is i " +i + "<br>");
                // if(i===n)
                // {
                //     document.write(" this " + i + "<br>");
                //     break; 
                // }
            }
        }
    }

}