function week()
{
    var val;
    val=parseInt(document.getElementById("wday").value);
switch(val)
case 1:document.write("Monday is the First day");
break;
case 2:document.write("Tuesday is the Second day");
break;
case 3:document.write("Wednesday is the Third day");
break;
case 4:document.write("Thursday is the Forth day");
break;
case 5:document.write("Friday is the Fifth day");
break;
case 6:document.write("Saturday is the Sixth day");
break;
case 7:document.write("Sunday is the Seventh day");
break;
default:document.write("invalid input");
}