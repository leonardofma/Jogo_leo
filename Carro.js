let xCarros = [600, 600, 600,600, 600, 600];
let yCarros = [38, 95, 150,210, 260, 313];
let speed = [3.4, 3.8, 4.4,3.4,4.0,3.6];
let larguraCar = 60;
let alturaCar = 40; 



function mostrarCarro(){
  for (let i = 0;  i < carros.length; i ++){
    image(carros[i], xCarros[i], yCarros[i], larguraCar, alturaCar);
    }
  }
function moverCarro(){
   for (let i = 0;  i < carros.length; i ++){
xCarros[i] -= speed[i];
   }
}

function pontoReset(){
   for (let i = 0;  i < carros.length; i++){
if (pontoBase(xCarros[i])){
xCarros[i] = 600;
}
   }
}
function pontoBase(xCarros){
  return xCarros < -50;
}

