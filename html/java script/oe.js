function display()
            {
                var num;
                num=parseInt(document.getElementById("num").value);
                if(num%2==0)
                {
                    document.write(num + "is an even Number");
                }
                else
                {
                    document.write(num + "is an odd Number");

                }                
            }