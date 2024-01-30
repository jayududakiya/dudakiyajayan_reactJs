{
    // Check if a word is a palindrome using a while loop 
    let name ="noon" , Sizes  ,checks1,checks2;

    // let name1 = name ;
    Sizes = name.length;
    console.log(name);

    for(let i = Sizes-1 ; i>=0; i-- )
    {
        checks1 = name[i];
    }

    for(let i = 0 ; i<=Sizes-1; i++)
    {
        checks2 = name[i];
    }


    if(checks1 === checks2)
    {
        console.log("is a palindrome");
    }else
    {
        console.log("is not a palindrome");
    }
}
