var T=document.getElementById("test");
T.addEventListener("click",function(){
	alert(this.value);
	document.write("C[x][y][z]=x+y+z"+"<br/>"); 
	var C=new Array();
	for(var x=0;x<2;x++){
		C[x]=new Array();
		for(var y=0;y<3;y++){
			C[x][y]=new Array();
			for(var z=0;z<4;z++){
				C[x][y][z]=x+y+z;
				document.write("C["+x+"]["+y+"]["+z+"]="+C[x][y][z]+"<br/>");			
			}
		}
	}
},false);
