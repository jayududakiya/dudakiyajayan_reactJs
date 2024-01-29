let a = 30 , b = 20 , c ;

c = a ; // c = 30 and a is empty now 
a = b ; // a = 20 and b is empty now 
b = c; //  b = c(30) and c is 30 now 

console.log(a);
console.log(b);
console.log(c);
