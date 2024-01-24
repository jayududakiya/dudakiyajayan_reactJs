

{

 link : for(let i = 1 ; i <=10 ; i++)
 {
    document.write("<br>");
    for(let j = 1 ; j<=10 ; j++)
    {
        if(i==11)
        {
            break link ;
        }

        document.write(i + "x" + j + "=" + i*j);
        document.write("<br>");
    }

 }
}