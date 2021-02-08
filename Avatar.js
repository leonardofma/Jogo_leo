let xAvatar = 250;
let yAvatar = 369;
let colisao = false;
let meusPontos = 0;


    



function mostrarAvatar(){
image(avatar, xAvatar, yAvatar, 25, 25);
}
function moverAvatar(){
  if (keyIsDown(UP_ARROW)){
yAvatar -=2.5
  }
if  (keyIsDown(DOWN_ARROW)){
   if(limitePassoD()){
yAvatar +=2.5
  }
}
    if (keyIsDown(RIGHT_ARROW)){
      if(limitePassoR()){
xAvatar +=2.5
      }
  }
if  (keyIsDown(LEFT_ARROW)){
 if(limitePassoL()){
xAvatar -=2.5
 }
}
}
function colisaoAtor(){
//collideRectCircle = function (rx, ry, rw, rh, cx, cy, diameter)
  for (i = 0; i < carros.length; i ++){
  
  colisao = collideRectCircle(xCarros[i], yCarros[i],larguraCar, alturaCar,xAvatar,yAvatar,13);
   if (colisao){
   voltaB() ;
  sonColisao.play();
  if (limiteZero()){
   meusPontos -=1;
  
  }
   }
    
  }
}
   
    function voltaB(){
      yAvatar = 369;
    }
     


function pontos(){
textAlign (LEFT);
textSize(30);
text  (meusPontos, width / 15,27);
  

}

function contandoPont(){
if(yAvatar < 15){
meusPontos += 1;
sonPonto.play();
voltaB() ;
}

}


function limiteZero(){
return meusPontos > 0;
}

function limitePassoD(){
return yAvatar < 369;
} 

function limitePassoL(){
return xAvatar > 1 ;
}

function limitePassoR(){
return xAvatar < 575 ;
}
