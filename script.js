score=0;
cross=true;

audio =new Audio('hi.wav')
audiog =new Audio('game.wav')

setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown=function (e){
console.log("the keycode is "+ e.keyCode)
if (e.keyCode==38) {
    dino =document.querySelector(".dino")
    dino.classList.add('animatdino')
    setTimeout(() => {
        dino.classList.remove('animatdino')
    }, 700);
}
if (e.keyCode==39) {
    dino =document.querySelector(".dino")
    // dino.classList.add('animatdino')
dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
dino.style.left= dinoX+120+"px"
}
if (e.keyCode==37) {
    dino =document.querySelector(".dino")
    // dino.classList.add('animatdino')
dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
dino.style.left= dinoX-120+"px"
}
}


setInterval(() => {
    dino=document.querySelector(".dino");
    gameover = document.querySelector(".gameover");
    obstacle=document.querySelector(".obstacle");
    obstacle=document.querySelector(".obstacle");

dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))

ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

offsetx=Math.abs(dx-ox)
offsety=Math.abs(dy-oy)
console.log(offsetx,offsety)

if (offsetx<93 && offsety<52) {
    gameover.innerHTML="Game over"
    gameover.style.visibility= 'visible';
obstacle.classList.remove('obsani')
audiog.play()
setTimeout(() => {
    audiog.pause();
    audio.pause();
}, 2000);
}

else if( offsetx<145 && cross){

   score =score+1;
   cross=false;
   setTimeout(() => {
       cross =true;
    }, 1000);
    updatescore(score);
}

anidur=parseFloat(window.getComputedStyle(dino,null).getPropertyValue('animation-duration'))
newdur=anidur-0.8;
obstacle.style.animationduration =newdur +'s'

}, 100);


function updatescore(score){
 shss=document.getElementById('hscore')
 shss.innerHTML="your score is:" +score ;
}