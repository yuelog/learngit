function per(){
	var pos_t;
	var pos_l;
	this.act=move;                       //����ַ�ģ�������move���()
	         this.moveUp=function(){
        		
				
				var	  pos = document.getElementById('person');
				var   pos_top = pos.style.top;
				      pos_top = pos_top.substring(0,pos_top.length-2);
			          pos_t = parseInt(pos_top)-20;
					  pos.style.top = pos_t+"px";
				if(pos_t>380&&pos_t<550&&pos_l>435&&pos_l<570){alert("���ţ������װ�������׽����׾�ƣ�O(��_��)O~");}
		        else if(pos_t<50||pos_t>560||pos_l<20||pos_l>650){alert("����,���ư��������Ǹ�׽������Ϸ��������ɶ");
												                  pos_t+=20;
																  pos.style.top = pos_t+"px";}
			 }
			 
			 this.moveDown=function(){
        		
				
				var	  pos=document.getElementById('person');
				var   pos_top=pos.style.top;
				      pos_top=pos_top.substring(0,pos_top.length-2);
				      pos_t = parseInt(pos_top)+20;
					  pos.style.top = pos_t+"px";
				if(pos_t>380&&pos_t<550&&pos_l>435&&pos_l<570){alert("���ţ������װ�������׽����׾�ƣ�O(��_��)O~");}
                else if(pos_t<50||pos_t>560||pos_l<20||pos_l>650){alert("����,���ư��������Ǹ�׽������Ϸ��������ɶ");
								                                  pos_t-=20;
																  pos.style.top = pos_t+"px";}				
			 }
			 
			 
			 this.moveLeft=function(){
        		
				
				var	  pos=document.getElementById('person');
				var   pos_left=pos.style.left;
				      pos_left=pos_left.substring(0,pos_left.length-2);
				      pos_l = parseInt(pos_left)-20;
					  pos.style.left = pos_l+"px";
				if(pos_t>380&&pos_t<550&&pos_l>435&&pos_l<570){alert("���ţ������װ�������׽����׾�ƣ�O(��_��)O~");}
				else if(pos_t<50||pos_t>560||pos_l<20||pos_l>650){alert("����,���ư��������Ǹ�׽������Ϸ��������ɶ");
								                                  pos_l+=20;
																  pos.style.left = pos_l+"px";}	  
			 }
			 
			 this.moveRight=function(){
        		
				
				var	  pos=document.getElementById('person');
				var   pos_top=pos.style.left;
				      pos_top=pos_top.substring(0,pos_top.length-2);
				      pos_l = parseInt(pos_top)+20;
					  pos.style.left = pos_l+"px";
				if(pos_t>380&&pos_t<550&&pos_l>435&&pos_l<570){alert("���ţ������װ�������׽����׾�ƣ�O(��_��)O~");}
				else if(pos_t<50||pos_t>560||pos_l<20||pos_l>650){alert("����,���ư��������Ǹ�׽������Ϸ��������ɶ");
				                                                  pos_l-=20;
																  pos.style.left = pos_l+"px";}	  
			 }
}

var meikeng=new per();                 //�����¶��󣬿��Լ�()��Ҳ���Բ���






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