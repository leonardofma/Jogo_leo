let mapa;
let carro1;
let carro2;
let carro3;
let avatar;
let sonColisao;
let sonPonto;

function preload() {
mapa = loadImage("Doc/estrada.png");
carro1 = loadImage("Doc/carro-1.png");
carro2 = loadImage("Doc/carro-2.png");
carro3 = loadImage("Doc/carro-3.png");
avatar = loadImage("Doc/ator-1.png");
sonColisao = loadSound("Sons/colidiu.mp3");
sonPonto = loadSound("Sons/pontos.wav");  
  carros = [carro1, carro2, carro3,carro1, carro3, carro2];

}

