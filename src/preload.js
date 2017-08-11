var imgs = [];
const src = [
  "./imgs/elmo.png"          ,
  "./imgs/indios-fila.jpg"   ,
  "./imgs/indios-fila-2.jpg" ,
  "./imgs/cacique.jpg"       ,
  "./imgs/opy-1.jpg"         ,
  "./imgs/cacique-2.jpg"     ,
  "./imgs/indios.jpg"        ,
  "./imgs/linguagem.jpg"     , 
  "./imgs/indio-face.png"    ,
  "./imgs/mapa.png"          ,
  "./imgs/mapa-2.png"        ,
  "./imgs/ocean.jpg"         ,
  "./imgs/leaf.png"          ,
  "./imgs/jarro.png"         ,
];
        
for(var i=0, l=src.length; i<l; i++) {
  imgs[i] = new Image();
  imgs[i].src = src[i];
}




