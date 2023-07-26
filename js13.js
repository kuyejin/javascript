

        var html = "";
        var btn1=document.getElementById("btn1");
        var btn2=document.getElementById("btn2");
        var btn3=document.getElementById("btn3");
        var btn4=document.getElementById("btn4");
        var btn5=document.getElementById("btn5");
        var btn6=document.getElementById("btn6");
        var btn7=document.getElementById("btn7");
        var btn8=document.getElementById("btn8");
        var res = document.getElementById("res");
        var res2 = document.getElementById("res2");
        
        btn1.addEventListener("click",function() {
            objInfo();
        });
        function objInfo() {
            for(var key in history) {
                        html += "<p>"+key+" : "+history[key]+"</p>";
                    }
            res.innerHTML = html;
        }
        
        btn2.addEventListener("click",function() {
            res2.innerText = location.href;
            setTimeout(function() {
                location.href = "https://www.naver.com"
            }, 2500)
            
        });

        btn3.addEventListener("click",function() {
            location.reload();
         });

         btn4.addEventListener("click",function() { 
            location.replace("https://www.google.com"); //replace => 뒤로가기 불가
         });

         btn5.addEventListener("click",function() { 
            location.assign("https://www.daum.net"); //
         });

         btn6.addEventListener("click",function() { 
            history.back(2); //
         });
         btn7.addEventListener("click",function() { 
            history.forward(); //
         });
         btn8.addEventListener("click",function() { 
            history.go(1); // -1 이면 한번 뒤로가기.
         });

         function moving() {
            var loc = document.getElementById("sel");
            if(loc.value!=""){
                // location.href = loc.value;
                location.assign(loc.value);
            }
            
        }