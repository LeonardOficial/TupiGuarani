import React, { Component } from "react"

export default class Caciques extends Component {

  componentDidMount() {
    const img  = document.querySelectorAll(".caciques img");
    
    TweenMax.from(img, 2, {
      ease: Elastic.easeOut,
      opacity: 0,
      y: "-=100"
    });
  }

  render() {
    return(
      <div class="app-holder caciques">
      
        <div class="text-holder">
        
          <img src="./imgs/elmo.png" />
      
          <h1>Caciques</h1>
        
          <p>
            A aldeia é liderada por um cacique que é responsável não só por fazer remédios,
            com ervas e alimentos extraídos diretamente da natureza, como também escolher os nome das crianças da tribo, 
            além de ser um excelente conselheiro.
          </p>
          
        </div>
        
      </div>
    );
  }

}