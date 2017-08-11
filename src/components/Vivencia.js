import React, { Component } from "react"
import { TweenMax, Back } from "gsap"

export default class Vivencia extends Component {

  componentDidMount() {
    const img  = document.querySelector(".center");
    const divs = document.querySelectorAll(".rotate div");
    const para = document.querySelectorAll(".text-holder p");
    
    TweenMax.staggerTo(divs, 2, {
      ease: Back.easeOut,
      cycle: { rotation: [120, 240, 360] }
    });
    
    TweenMax.from(img, 1.6, {
      ease: Back.easeOut,
      opacity: 0,
      scale: .5
    }, .6);
    
    TweenMax.from(para, 2, {
      height: "4px"
    }); 
    
  }

  render() {
  
    return(
      <div class="app-holder vivencia">    
        
        <img class="center" src="./imgs/indios-fila-2.jpg" />
        
        <div class="rotate">
        
          <div>
            <img class="corner-img" src="./imgs/ocean.jpg" />
          </div>
          
          <div>
            <img class="corner-img" src="./imgs/leaf.png" />
          </div>
          
          <div>
            <img class="corner-img" src="./imgs/jarro.png" />
          </div>
          
        </div>
        
        <div class="text-holder">
    
          <h1>Vivencia</h1>
          
          <p>
            Acreditam que um bom lugar para viver é próximo ao <font color="#28AFC8">mar</font>, mas distante dele,
            e com terra boa para <font color="#C1C93B">plantar</font>, uma vez que é parte de sua cultura o desenvolvimento de roça familiar, 
            com plantio em sistema de rodízio. Além de ser necessário um lugar para pescar, caçar e colher frutas no mato. 
            Cultivam próximas as moradias <font color="#C1C93B">arvores frutífera</font> e da <font color="#C1C93B">mata</font> retiram matérias propícios a <font color="#F98629">construção de casas</font>, 
            <font color="#F98629">artesanatos</font>, <font color="#F98629">ornamentos</font> e de <font color="#F98629">objetos rituais mágicos e religiosos</font>.
          </p>
        </div>
        
      </div>
    );
  }

}