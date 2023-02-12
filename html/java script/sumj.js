function Sum()
{
    var a,sum,i;
    a=parseInt(document.getElementById("num").value);
    //document.write("add function")
    //sum=1;
    for(i=1;i<=10;i++)
    {
    sum=sum+i;
    }
    document.getElementById("sum = "+sum)
}