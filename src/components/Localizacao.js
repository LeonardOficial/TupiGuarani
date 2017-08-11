import React, { Component } from "react"

export default class Localizacao extends Component {

  componentDidMount() {
    const img  = document.querySelectorAll(".localizacao img");
    
    TweenMax.from(img, 2, {
      ease: Elastic.easeOut,
      opacity: 0,
      scale: .5
    });
  }

  render() {
    return(
    
      <div class="app-holder localizacao">
      
        <div class="text-holder">
        
          <img src="./imgs/mapa-2.png" />
          
          <h1>Localização</h1>
          
          <p>
            Localizada em uma das terras demarcadas e homologadas 
            como indígena pelo governo federal em 1996, a área de Bracuí 
            é cercado de mata atlântica, numa região montanhosa, no município de Angra dos Reis.
          </p>
          
        </div>
        
      </div>
    );
  }

}
