    window.onload = function () {         
        getTimes();  
        var box = document.getElementsByClassName("box")[0];
        setInterval(getTimes, 1000);  
    }  
    function getTimes() {  
       var box = document.getElementsByClassName("box")[0];  
        var dateTime = new Date();  
        var year = dateTime.getFullYear();  
        var date = dateTime.getDate();  
        var month = dateTime.getMonth() + 1;  
        var hours = dateTime.getHours();  
        var minutes = dateTime.getMinutes();  
        var secondes = dateTime.getSeconds();  
        box.innerHTML = year + "-" + format(month) + "-" + format(date) + " " + format(hours) + ":"+ format(minutes) +":" + format(secondes);  
    }   
    function format(a) {  
        return a.toString().replace(/^(\d)$/, "0$1");  
    }   