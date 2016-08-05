$(function(){
	var images=$("a",$(".box")[0]);
	var lis=$("li",$(".window")[0]);
	var win=$(".window")[0];
	var left=$(".Left")[0];
    var right=$(".Right")[0];
    /*获取图片宽度*/
    var widths=parseInt(getStyle(win,"width"));
    /*初始化状态*/
    lis[0].style.background="red";
	for (var i = 0; i < images.length; i++) {
		if (i==0) {
			continue;
		}
		images[i].style.left=widths+"px";
	}
	var index=0;
	var next=0;
	var flag=true;
	var t=setInterval(moveR,2000);
	function moveL(){
		// 更新next
		next--;
		// 判断边界
		if (next<0) {
			next=images.length-1;
		};
		lis[index].style.background="#ccc";
		lis[next].style.background="red";
		// 让下一张图片就位
		images[next].style.left=-widths+"px";
		// 做动画，让下一张图片left：-widths；当前图片的left：0
		animate(images[index],{left:widths},Tween.Quad.easeIn,function(){flag=true});
		animate(images[next],{left:0},Tween.Quad.easeIn,function(){flag=true});
		// 更新index
		index=next;
	}
	function moveR(){
		// 更新next
		next++;
		// 判断边界
		if (next==images.length) {
			next=0;
		};
		lis[index].style.background="#ccc";
		lis[next].style.background="red";
		// 让下一张图片就位
		images[next].style.left=widths+"px";
		// 做动画，让下一张图片left：-widths；当前图片的left：0
		animate(images[index],{left:-widths},Tween.Quad.easeIn,function(){flag=true;});
		animate(images[next],{left:0},Tween.Quad.easeIn,function(){flag=true;});

		// 更新index
		index=next;
	}

	win.onmouseover=function(){
		clearInterval(t);
		animate(left,{opacity:1})
		animate(right,{opacity:1})
	}
	win.onmouseout=function(){ 
		t=setInterval(moveR,2000);
		animate(left,{opacity:0})
		animate(right,{opacity:0})
	}
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		lis[i].onclick=function(){
			if (index==this.index) {return};//当连续点击当前图片的时候跳出来不执行任何事件
			if (this.index>index) {
                images[this.index].style.left=widths+"px";
		        animate(images[index],{left:-widths},Tween.Quad.easeIn,function(){flag=true;});
		        animate(images[this.index],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		        lis[index].style.background="#ccc";
		        lis[this.index].style.background="red";
			}else if(this.index<index){
				images[this.index].style.left=-widths+"px";
		        animate(images[index],{left:widths},Tween.Quad.easeIn,function(){flag=true;});
		        animate(images[this.index],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		        lis[index].style.background="#ccc";
		        lis[this.index].style.background="red";
			}
		    
		    next=this.index;
		    index=this.index;   
	    }
	}
	right.onclick=function(){
		if (flag) {
			flag=false;
			moveR();
		};
				
	}
	left.onclick=function(){
		if (flag) {
			flag=false;
			moveL();
		};
				
	}


	var box1=$(".box1");
	
	
	for(var i=0;i<box1.length;i++){
           bian(box1[i])
	}
function bian(obj){

    var bw=obj.offsetWidth;
	var bh=obj.offsetHeight;

	var left1=$(".left1",obj)[0];
	var right1=$(".right1",obj)[0];
	var top=$(".top",obj)[0];
	var bottom=$(".bottom",obj)[0];

obj.onmouseover=function(){
		animate(left1,{height:bh+2})
		animate(right1,{height:bh+2})
		
		animate(top,{width:bw+2})
		animate(bottom,{width:bw+2})
	}
	obj.onmouseout=function(){
		animate(left1,{height:0})
		animate(right1,{height:0})
		animate(top,{width:0})
		animate(bottom,{width:0})
	}


}






var nr=$(".nr");
var nrz=$(".nrz");
for(var i=0;i<nr.length;i++){
	nr[i].index=i
nr[i].onmouseover=function(){
	nrz[this.index].style.display="block"
}
nr[i].onmouseout=function(){
	nrz[this.index].style.display="none"
}
}



var wenxin=$(".wenxin")[0];
var sjyt=$(".sjyt")[0];
var head115=$(".head115")[0];
var head119=$(".head119")[0];

head115.onmouseover=function(){
	wenxin.style.display="block"
}
head115.onmouseout=function(){
	wenxin.style.display="none"
}
head119.onmouseover=function(){
	sjyt.style.display="block"
}
head119.onmouseout=function(){
	sjyt.style.display="none"
}


var list=$(".list")[0];
var head127=$(".head127")[0];
head127.onmouseover=function(){
	list.style.display="block"
}
head127.onmouseout=function(){
	list.style.display="none"
}


var ycdw=$(".ycdw")[0];
var ycdw1=$(".ycdw1");
var ycdw2=$(".ycdw2");
var floor=$(".floor");
var arr=[];
var obj=document.body.scrollTop?document.body:document.documentElement;
		var scrollTop=obj.scrollTop;

var louflag=true;
for(var i=0;i<floor.length;i++){
   arr.push(floor[i].offsetTop)
}
console.log(arr)
for(var i=0;i<arr.length;i++){
  ycdw1[i].index=i;
  ycdw1[i].onclick=function(){
  	
  	var obj=document.body.scrollTop?document.body:document.documentElement;
		var scrollTop=obj.scrollTop;
		console.log(2121)
		animate(obj,{scrollTop:arr[this.index]})
  }
  ycdw1[i].onmouseover=function(){
     for(var i=0;i<ycdw2.length;i++){
     	ycdw2[this.index].style.display="block"
     }
  }
   ycdw1[i].onmouseout=function(){
     for(var i=0;i<ycdw2.length;i++){
     	ycdw2[this.index].style.display="none"
     }
  }

}
ycdw1[9].onclick=function(){
	var obj=document.body.scrollTop?document.body:document.documentElement;
		var scrollTop=obj.scrollTop;
		animate(obj,{scrollTop:0})
}

window.onscroll=function(){
       for(var i=0;i<ycdw2.length;i++){
   	    var obj=document.body.scrollTop?document.body:document
		.documentElement;
		var scrollTop=obj.scrollTop;
		// console.log(ycdw2);
		if(scrollTop>=arr[i]){

			if(louflag){
				louflag=false;
				console.log(ycdw)
           animate(ycdw,{opacity:1})

		}
		for(var j=0;j<ycdw2.length;j++){
			ycdw2[j].style.display="none"
		}
		ycdw2[i].style.display="block"
	}
	if(scrollTop<=arr[0]){
		if(!louflag){
            louflag=true;
           animate(ycdw,{opacity:0})
       }
           for(var i=0;i<ycdw2.length;i++){
           	ycdw2[i].style.display="none"
           }

		
	}


      }
		



}
for(var i=0;i<8;i++){
var spzxtp=$(".spzxtp")[i];
var imgs=$("img",$(".spzxtp")[i]);
var liss=$("li",$(".spzxtp")[i]);
var btnleft=$(".btnleft");
var btnright=$(".btnright");
 var iw=parseInt(getStyle(spzxtp,"width"));
 btnleft[i].index=i;
 btnleft[i].onclick=function(){
 	imgs[0].style.left=iw+"px"
 }



	// for(var i=0;i<liss.length;i++){
 //          liss[0].style.background="red";

	// 	liss[i].index=i;
	// 	liss[i].onclick=function(){

 //          liss[this.index].style.background="red";
 //          liss[0].style.background="#ccc"
	// 	}
	// }
}

 








})