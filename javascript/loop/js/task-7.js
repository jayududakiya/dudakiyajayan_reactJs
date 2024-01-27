{
    // Check if a word is a palindrome using a while loop 
    let  b = 10 , c = 0 , i;

        // c = 0 + a + i++;
        // for(i=0;i<=10;i++)
        // {
        //     c = c+ b + 1;
        //     document.write(c + " ");
        //     if(c>99)
        //     {
        //         b = 100;
        //         c = c + b + 10 + i;
        //         document.write(" " + c + " " );
        //     }
        // }


        let y= 0 ;
        var  x=124;

        while(x!=0){
            y=y*10+x%10;
            // x/=10;
            // x = Math.floor(x/10);
            x = x/10;
        }
        console.log(x);
        console.log(y);
}