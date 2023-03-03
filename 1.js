var but = document.getElementById('but');
var radio1 = document.getElementsByName('in1');
var radio2 = document.getElementsByName('in2');
var radio3 = document.getElementsByName('in3');
var radio4 = document.getElementsByName('in4');
var radio5 = document.getElementsByName('in5');
var radio6 = document.getElementsByName('in6');
var radio7 = document.getElementsByName('in7');
var radio8 = document.getElementsByName('in8');
var radio9 = document.getElementsByName('in9');
var radio10 = document.getElementsByName('in10');
var radio11 = document.getElementsByName('in11');



function f2() {
   
    for (i=0;i<radio11.length;i++){
        
        
     if(radio11[i].selected && radio1[i].selected && radio6[i].selected) {

       
         document.getElementById('one').src="1998-2002.jpg";
         
                return;
        }
        
        
     else if(radio11[i].selected && radio1[i].selected && radio7[i].selected) {
         document.getElementById('one').src="1998-2006.jpg";
     }
        
     else if(radio11[i].selected && radio1[i].selected && radio8[i].selected) {
         document.getElementById('one').src="1998-2010.jpg";
     }
     else if(radio11[i].selected && radio1[i].selected && radio9[i].selected) {
         document.getElementById('one').src="1998-2014.jpg";
     }
        
     else if(radio11[i].selected && radio1[i].selected && radio10[i].selected) {
         document.getElementById('one').src="1998-2018.jpg";
     }
        
        
     else if(radio11[i].selected && radio2[i].selected && radio7[i].selected) {
         document.getElementById('one').src="2002-2006.jpg";
     }
        
     else if(radio11[i].selected && radio2[i].selected && radio8[i].selected) {
         document.getElementById('one').src="2002-2010.jpg";
     }
     else if(radio11[i].selected && radio2[i].selected && radio9[i].selected) {
         document.getElementById('one').src="2002-2014.jpg";
     }
        
     else if(radio11[i].selected && radio2[i].selected && radio10[i].selected) {
         document.getElementById('one').src="2002-2018.jpg";
     }
     else if(radio11[i].selected && radio3[i].selected && radio8[i].selected) {
         document.getElementById('one').src="2006-2010.jpg";
        
    }
     else if(radio11[i].selected && radio3[i].selected && radio9[i].selected) {
         document.getElementById('one').src="2006-2014.jpg";
        
    }
     else if(radio11[i].selected && radio3[i].selected && radio10[i].selected) {
         document.getElementById('one').src="2006-2018.jpg";
        
    }
        
     else if(radio11[i].selected && radio4[i].selected && radio9[i].selected) {
         document.getElementById('one').src="2010-2014.jpg";
        
    }
     else if(radio11[i].selected && radio4[i].selected && radio10[i].selected) {
         document.getElementById('one').src="2010-2018.jpg";
        
    }
     else if(radio11[i].selected && radio5[i].selected && radio10[i].selected) {
         document.getElementById('one').src="2014-2018.jpg";
        
    }
}

}
