function Fibonacci()
{
    var first=0;
    var second=1;
    var third;
    var t;
    var i=0;
    t=parseInt(document.getElementById("term").value);
    document.write(first+"<br>")
    document.write(second+"<br>")

    for(i=0;i<t-2;i++)
    {
        third=first+second;
        document.write(third+"<br>")
        first=second;
        second=third;
    }
}