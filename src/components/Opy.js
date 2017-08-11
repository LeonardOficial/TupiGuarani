import React, { Component } from "react"

export default class Opy extends Component {

  componentDidMount() {
    const img  = document.querySelectorAll(".opy img");
    
    TweenMax.from(img, 2, {
      ease: Elastic.easeOut,
      opacity: 0,
      scale: .5
    });
  }

  render() {
    return(
      <div class="app-holder opy">
      
        <div class="text-holder">
        
          <img src="./imgs/opy-1.jpg" />
          
          <h1>Opy</h1>
          
          <p>
            Todas as atividades significativas da aldeia acontecem na Casa de Reza (opy), 
            por isso a mesma possui lugar de destaque, para que não haja entrada de espíritos indesejáveis,
            seu interior é completamente vedado.
          </p>
          
        </div>
        
      </div>
    );
  }

}