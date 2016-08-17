function one() {
  var message=confirm("继续学习？");
  if (message==true) {
    alert("good");
  }
  else{
    alert("bad");
  }
}
function two() {
  var message=prompt("学习时间");
  if(message>=25) {
    alert("good");
  }
  else if (message>=15) {
    alert("well");    
  }
  else if (message>=10) {
    alert("not bad");
  }
  else if (message<=10&&message>=0) {
    alert("FUCK!!!!!");
  }
  else{
    alert("你是不是傻 输入数字啊 ！")
  }
}
function three() {
  var open=confirm("确认新建窗口打开网站吗？");
  if (open==true) {
    var url=prompt("确定网址","./PPI-switch.html");
    if (url!=null) {
      window.open(url,'_blank','height=700,width=500,top=100px,left=0px'); 
    }
    else{
      alert("再见！");
    }
  }
  else{
      alert("再见！");
  }  
}
function four() {
  window.close();
}
/*function test() {
  var qs1=confirm("Are You ready ?");
  if (qs1==true) {
    var qs2=prompt("Enter your age .");
    if (qs2>=18) {
      var qs3=confirm("Do You like programming ?");
      if (qs3==true) {
        alert("Good");
      }
      else{
        alert("Bad");
      }
    }
    else{
      alert("Sorry You are too native .");
    }
  }
  else{
    alert("Try again when You ready .");
  }
}*/
/* var mydiv=document.getElementById("txt");
  var myh=document.getElementById("con");
//定义"改变颜色"的函数
    function A(){
        mydiv.style.color="red";
        mydiv.style.backgroundColor="blue";
        mydiv.style.fontSize="20px";
      }
//定义"改变宽高"的函数
    function B(){
        mydiv.style.width="300px";
        mydiv.style.height="300px";
    } 
//定义"隐藏内容"的函数
    function C(){
        mydiv.style.display="none";
    }
//定义"显示内容"的函数
    function D(){
        mydiv.style.display="block";
    }
//定义"取消设置"的函数
    function E(){
        var mychose = confirm();
        if(mychose==true){
        mydiv.removeAttribute("style");
    }
}*/
