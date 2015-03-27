



var colorchart={

1:"teal",
2:"limegreen",
3:"#FF00FF",
4:"khaki",
5:"#663399",
6:"yellow",
7:"thistle",
8:"darkblue",
9:"#FF1493",
10:"#FF0000",
};

var num = ['1','2','3','4'];
function shuffle(o){ 
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var m=shuffle(num);
var l=shuffle(num);
var record=[];
var gameStarter;

var counter=0;
function init(){




/*var isGameOn=true;
if(isGameOn){


startGame();
}
*/
} 

onload = init;


function startGame(){


var i="sq"+m[counter];

record.push(i);

counter++;

var k=document.getElementById(i);
 k.style.background=colorchart[l[counter-1]];
 k.style.border="solid 1px black";

gameStarter=setTimeout("startGame()",500);
isGameOn=true;


if(counter>=9){
counter=0;

clearTimeout(gameStarter);

}
}

var player=[];
var element= document.getElementsByTagName('td');
for(var i=0;i<element.length;i++){
      element[i].addEventListener("click", function(){
     eid=this.id;
     player.push(eid);
 
    }, false);   
   
      
 }





function verify(){

var score=0;
for(var x=0;x<record.length;x++){


if(player[x]!=record[x]){
alert("You have entered the incorrect sequence");

break;

}

else

alert("You have entered the correct sequence");
score+=1;
scores.innerHTML=score;
break;

}

record.splice(0,10);
player.splice(0,10);

location.reload();
}



 

