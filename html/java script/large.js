function largestThree()
          {
            var n1;
            var n2;
            var n3;
            n1=parseInt(document.getElementById("num1").value);
            n2=parseInt(document.getElementById("num2").value);
            n3=parseInt(document.getElementById("num3").value);
            if(n1>n2 && n1>n3)
            {
                document.getElementById("result").innerHTML=n1+ "is the greatest of three";

            }
            if(n2>n1 && n2>n3)
            {
                document.getElementById("result").innerHTML=n2+ "is the greatest of three";
            }
            if(n3>n2 && n3>n1)
            {
                document.getElementById("result").innerHTML=n3+ "is the greatest of three";
            }
          }