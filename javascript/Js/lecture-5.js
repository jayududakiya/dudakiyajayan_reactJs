// functions to interact with the User: alert , prompt and confirm.

/*

1. alert() - shows a message.

2. prompt() - shows a message, input text. it returns the text on ok or,  if cancel button or Esc is clicked, Null.

3. confirm() - shows a message, confirm with "ok" or "cancel". it returns true for OK and false for cancel/Esc.

*/

{
    window.alert("hello this old version of alert in javascript");
    alert("hello this is javascript");
}


{
    let x = prompt("hello this prompt function for input values" , "");
    document.write(x + "<br>");
    document.write(typeof(x) + "<br>");
}

{
    let z = confirm("this is confirm its return only boolean value \n if you press 'OK' than it's : true or if you press 'Cancel' than it's false ");

    document.write(z + "<br>");

    if(z == 1)
    {
        document.write("thanks for allow as to join you ");
    }else
    {
        document.write("pleas press valid button ");
    }
}