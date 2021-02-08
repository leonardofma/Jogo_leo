function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(mapa);
  mostrarCarro();
  mostrarAvatar();
  moverAvatar();
  moverCarro();
  pontoReset();
  colisaoAtor();
  pontos();
  contandoPont();
  
  
}
