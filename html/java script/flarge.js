function largerfour()
          {
            var lar;
            var n1;
            var n2;
            var n3;
            var n4;
            n1=parseInt(document.getElementById("num1").value);
            n2=parseInt(document.getElementById("num2").value);
            n3=parseInt(document.getElementById("num3").value);
            n4=parseInt(document.getElementById("num4").value);
            lar=(n1>n2 && n1>n3 && n1>n4)?n1:(n2>n1 && n2>n3 && n2>n4)?n2:(n3>n1 && n3>n2 && n3>n4)?n3:n4;
            document.getElementById("result").innerHTML=lar+"is the reatest of four numbers";
          }
            