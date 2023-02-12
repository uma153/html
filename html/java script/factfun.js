function Factorial()
{
    var i,fact,inputnum;
    inputnum=parseInt(document.getElementById("num").value);
    fact=1;
    for(i=1;i<=inputnum;i++)
    {
        fact=fact*i;
    }
    document.getElementById("Result").innerHTML="Factorial of "+inputnum+ " is " +fact;
}