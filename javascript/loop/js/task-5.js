
{
    let a  , b = 0 , c = 1;

    document.write( b + " " + c );
    for(a=1;a<=10;a++)
    {
        a  = b ;
        b = c ;
        
        c = a + b ;
        document.write(" " + c + " ");
    }
}