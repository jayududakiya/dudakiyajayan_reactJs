console.log("Check if a number is odd or even in JavaScript");

{
    let x = 23;

    if(x % 2 == 0){
        console.log("number is even ");
    }else{
        console.log("number is odd");
    }
}

console.log("Find the larger of two number");


{
    let x = 18 , y = 20;

    if(x > y){
        console.log("x is larger");
    }
    else if(x == y)
    {
        console.log(" X and y are sem number ");
    }
    else{
        console.log("y is larger");
    }
}

console.log("Perform arithmetic operations on two numbers");

{
    const x = 10 ;
    const y = 30 ;

    console.log(x + y);
    console.log(x - y);
    console.log(x / y);
    console.log(x % y);
    console.log(x * y);
}



console.log("Find the grade for input marks");
{
    let x = 70 ;

    if(x < 33)
    {
        console.log("student is fail")
    }
    else if(x > 33 && x < 64)
    {
        console.log("student grade is : 'C'")
    }
    else if(x >= 65 && x < 74)
    {
        console.log("student grade is : 'B'")
    }
    else if(x >= 75 && x < 84)
    {
        console.log("student grade is : 'A'")
    }
    else if(x >= 90 )
    {
        console.log("student grade is : 'A+'")
    }
    else
    {
        console.log("wrong mask input please input valid masks ")
    }
}

console.log("Sort three numbers");

{
    let a = 5 , b = 10 , c = 50 ;

    if(a < b && a < c)
    {
        if(b < c)
        {
            console.log("A , B , C");
        }else
        {
            console.log("A , C , B");
        }
    }
    else if(b < a && b < c)
    {
        if(a < c)
        {
            console.log("B , A , C");
        }else
        {
            console.log("B , C , A");
        }
    }
    else if(c < a && c < b)
    {
        if(a < b)
        {
            console.log("C , A , B");
        }else
        {
            console.log("C , B , A");
        }
    }
    
}