function per(){
	var pos_t;
	var pos_l;
	this.act=move;                       //赋地址的，不用在move后加()
	         this.moveUp=function(){
        		
				
				var	  pos = document.getElementById('person');
				var   pos_top = pos.style.top;
				      pos_top = pos_top.substring(0,pos_top.length-2);
			          pos_t = parseInt(pos_top)-20;
					  pos.style.top = pos_t+"px";
				if(pos_t>380&&pos_t<550&&pos_l>435&&pos_l<570){alert("肥婆，猴赛雷啊，你真捉鸡（拙计）O(∩_∩)O~");}
		        else if(pos_t<50||pos_t>560||pos_l<20||pos_l>650){alert("肥婆,逗逼啊？！这是个捉鸡的游戏！你乱跑啥");
												                  pos_t+=20;
																  pos.style.top = pos_t+"px";}
			 }
			 
			 this.moveDown=function(){
        		
				
				var	  pos=document.getElementById('person');
				var   pos_top=pos.style.top;
				      pos_top=pos_top.substring(0,pos_top.length-2);
				      pos_t = parseInt(pos_top)+20;
					  pos.style.top = pos_t+"px";
				if(pos_t>380&&pos_t<550&&pos_l>435&&pos_l<570){alert("肥婆，猴赛雷啊，你真捉鸡（拙计）O(∩_∩)O~");}
                else if(pos_t<50||pos_t>560||pos_l<20||pos_l>650){alert("肥婆,逗逼啊？！这是个捉鸡的游戏！你乱跑啥");
								                                  pos_t-=20;
																  pos.style.top = pos_t+"px";}				
			 }
			 
			 
			 this.moveLeft=function(){
        		
				
				var	  pos=document.getElementById('person');
				var   pos_left=pos.style.left;
				      pos_left=pos_left.substring(0,pos_left.length-2);
				      pos_l = parseInt(pos_left)-20;
					  pos.style.left = pos_l+"px";
				if(pos_t>380&&pos_t<550&&pos_l>435&&pos_l<570){alert("肥婆，猴赛雷啊，你真捉鸡（拙计）O(∩_∩)O~");}
				else if(pos_t<50||pos_t>560||pos_l<20||pos_l>650){alert("肥婆,逗逼啊？！这是个捉鸡的游戏！你乱跑啥");
								                                  pos_l+=20;
																  pos.style.left = pos_l+"px";}	  
			 }
			 
			 this.moveRight=function(){
        		
				
				var	  pos=document.getElementById('person');
				var   pos_top=pos.style.left;
				      pos_top=pos_top.substring(0,pos_top.length-2);
				      pos_l = parseInt(pos_top)+20;
					  pos.style.left = pos_l+"px";
				if(pos_t>380&&pos_t<550&&pos_l>435&&pos_l<570){alert("肥婆，猴赛雷啊，你真捉鸡（拙计）O(∩_∩)O~");}
				else if(pos_t<50||pos_t>560||pos_l<20||pos_l>650){alert("肥婆,逗逼啊？！这是个捉鸡的游戏！你乱跑啥");
				                                                  pos_l-=20;
																  pos.style.left = pos_l+"px";}	  
			 }
}

var meikeng=new per();                 //创建新对象，可以加()，也可以不加






function move(direct){
		switch(direct){
			case "up":
			       meikeng.moveUp();   
				   break;
			case "down":
			       meikeng.moveDown();
				   break;
			case "left":
			       meikeng.moveLeft();
				   break;
			case "right":
			       meikeng.moveRight();
				   break;
		}
		
	}