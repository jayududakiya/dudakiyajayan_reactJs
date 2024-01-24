{

    let i = 1 , num = prompt("Check if a number is prime : ") ;

    // for (i = 2; i <= n / 2; ++i) {

    //     // if n is divisible by i, then n is not prime
    //     // change flag to 1 for non-prime number
    //     if (num % i == 0) {
    //       flag = 1;
    //       break;
    //     }
    //   }

    while(i<=num)
    {
        if(num % 2 == 1)
        {
            document.write("number is prime : " + num );
            break;
        }
        else
        {
            document.write("number is not prime : " + num );
            break;
        }
        i++;
    }

}