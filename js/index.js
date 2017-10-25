    //第一个功能：轮播
    function banner(){
            var oW= 0;
            var oBanner = document.getElementById("banner");
			var oBtnL = document.getElementById("btn_L");
			var oBtnR = document.getElementById("btn_R");
			var oView = document.getElementById("view");
			var oUl = oView.getElementsByTagName('ul')[0];
			var aLis = oUl.children;
			var oOl = document.getElementsByTagName('ol')[0];
			var oBnts = oOl.children;
			oUl.innerHTML+=oUl.innerHTML;
			var aLis = oUl.children;
			var oLiWidth = aLis[0].offsetWidth;
			var iNum = 0;
			//计算轮播图的宽度
			oUl.style.width = aLis[0].offsetWidth*aLis.length + 'px';
			oW= document.documentElement.clientWidth;
			
			//计算轮播图居中
			oView.style.left = -(oView.offsetWidth - oW)/2 +'px';
			
			//当窗口改变的时候重新计算轮播图居中
			window.onresize=function(){
				oW= document.documentElement.clientWidth;
				oView.style.left = -(oView.offsetWidth - oW)/2 +'px';
			};
//			oBanner.offsetWidth=oW+"px"
			//点击右侧按钮
			oBtnR.onclick=function(){
				iNum++;
				if(iNum==aLis.length/2+1){
					oUl.style.left = oUl.offsetLeft + oUl.offsetWidth/2+'px'
					iNum=1;
				}
				for(var i=0; i<oBnts.length;i++){
					oBnts[i].className='';
				};
				if(iNum==aLis.length/2){
					oBnts[0].className='active';
				}else{
					oBnts[iNum].className='active';
				}
				animate(oUl,{'left': -iNum*oLiWidth});
			};
				
			//点击左侧按钮
			oBtnL.onclick=function(){
				iNum--;
				if(iNum<0){
					oUl.style.left =- oUl.offsetWidth/2+'px'
					iNum=aLis.length/2-1;
				};
				for(var i=0; i<oBnts.length;i++){
					oBnts[i].className='';
				};
				oBnts[iNum].className='active';
				animate(oUl,{'left': -iNum*oLiWidth});
			};
			
			//点解数字按钮切换轮播
			
			for(var i =0; i<oBnts.length;i++){
				oBnts[i].index=i;
				oBnts[i].onclick=function(){
					for(var i =0; i<oBnts.length;i++){
						oBnts[i].className='';
					}
					oBnts[this.index].className='active';
					iNum=this.index;
					animate(oUl,{'left': -this.index*oLiWidth});
					
				}
			};



             //添加自动播放	
             
             function play(){
    	 	
    	 	 timer=setInterval(function(){
    	 		iNum++;
				if(iNum==aLis.length/2+1){
					oUl.style.left = oUl.offsetLeft + oUl.offsetWidth/2+'px'
					iNum=1;
				}
				for(var i=0; i<oBnts.length;i++){
					oBnts[i].className='';
				};
				if(iNum==aLis.length/2){
					oBnts[0].className='active';
				}else{
					oBnts[iNum].className='active';
				}
				animate(oUl,{'left': -iNum*oLiWidth});
    	 	},1000)
    	 }
    	 play()
    	 
//  	function play1(){
//				iNum++;
//				if(iNum==aLis.length/2+1){
//					oUl.style.left = oUl.offsetLeft + oUl.offsetWidth/2+'px'
//					iNum=1;
//				}
//				for(var i=0; i<oBnts.length;i++){
//					oBnts[i].className='';
//				};
//				
//				animate(oUl,{'left': -iNum*oLiWidth});
//			};
//          play1()
			  }
    banner()
            
    //第二个功能选项卡自动播放
    function changecard(){ 
        	var titles=document.getElementById("title")
			var title=document.getElementById("title").getElementsByTagName("li")
			var contents=document.getElementById("content")
			var content=document.getElementById("content").getElementsByTagName("ul")

		   content[0].style.display="block"
		   for(var i=0;i<title.length; i++){
		   title[i].index=i;
		   title[i].onclick=function(){
			for(var i=0;i<title.length; i++){
				title[i].className="";	
				content[i].style.display="none";
			};
			this.className="active";
			content[this.index].style.display="block";
			
		}
	}
        }
    changecard()

    //返回顶部
    function back(){
        	var oBtn = document.getElementById("back");
			var timer = null;
			var oTop=0;
			var off=true;
			window.onscroll=function(){
				oTop = document.documentElement.scrollTop || document.body.scrollTop;
				var nav1=document.getElementById("nav1");
				//判断滚轮位置 出现顶部导航
				if(oTop>180){
			nav1.style.top="0px";
		      }else{
			nav1.style.top="-80px"
		        }
		      //判断滚轮位置 出现返
				if(oTop>500){
					oBtn.style.display='block'
				}else if(oTop<500){
					oBtn.style.display='none'
				};
				if(!off){
					clearInterval(timer)
				}
				off=false;
			};
			//滚轮事件：1.点击返回顶部返回；2.顶部滚轮事件
			oBtn.onclick=function(){
				timer=setInterval(function(){
					var backTop = oTop/10;
					if(oTop<=0){
						clearInterval(timer)
					}else{
						if(document.documentElement.scrollTop){
							document.documentElement.scrollTop-=backTop;
						}else{
							document.body.scrollTop-=backTop;	
						}
						off=true;
					}
					console.log(backTop)
				},30)
			}

        }
    back()
        
    //点击购物车的冒泡事件
    function shop(){
    	var btn=document.getElementById("shopcarts")
        var box=document.getElementById("shopcart")
        var more=document.getElementById("more1")

        box.style.display="none"
        btn.onclick=function(ev){
                var ev=ev || event
if(ev){
box.style.display="block"
        	more.style.backgroundPositionX=-45+'px'
        	ev.cancelBubble=true
}else{
box.style.display="block"
        	more.style.backgroundPositionX=-45+'px'
        		window.event.cancelBubble=true
}

        	
        }
       document.onclick=function(){
       	box.style.display="none";
       	more.style.backgroundPositionX=""
       	
       }
    }
    shop()
    //左侧菜单移入移出
    function move(){
  	var oul=document.getElementById("oul")
 	var oli=oul.getElementsByTagName("li")
	var oson=document.getElementById("son") 

	for(var i=0;i<oli.length;i++){
		oli[i].index=i
		oli[i].onmousemove=function(){
			this.style.background="#F0F0F0"
			this.style.color="#555555"
	        oson.style.display="block"
            oson.style.top=(this.index)*oli[0].offsetHeight-2+'px'  
		}
		  oli[i].onmouseout=function(){
		     oson.style.display="none"
		     this.style.background=""
			 this.style.color=""
		}
		
	}
    
  	
  }
    move()
    
    //登录
    function login(){
	oWrap = document.getElementById("wrap");
	var oBtn = document.getElementById("btn");
	var oBox = document.getElementById("box");
	var oClose = document.getElementById("close");
	var oW=0,oH=0;
	oBtn.onclick=function(){
	oWrap.style.display='block';			
	msg()
		};
	oClose.onclick=function(){
				oWrap.style.display='none';
	}
	function msg(){
				oW = document.documentElement.clientWidth;
				oH = document.documentElement.clientHeight;
				oBox.style.left = (oW - oBox.offsetWidth)/2+'px';
				oBox.style.top = (oH - oBox.offsetHeight)/2+'px';
			}
    }
    login()
    
     //全选
	function all(){
			var btn1=document.getElementById("all")
			var a=document.getElementById("inputs").getElementsByTagName("input")
			var btn2=document.getElementById("noselect")
			var off=true
			btn1.onclick=function(){
		        		for( var i=0;i<a.length; i++){
		        			a[i].checked=true
		        		}
		        		btn2.checked=false
		        		}
			 btn2.onclick=function(){
		        		for( var i=0;i<a.length; i++){
		        			a[i].checked=false
		        		}
		        		btn1.checked=false
		        		}
			
		}
	all()
		
