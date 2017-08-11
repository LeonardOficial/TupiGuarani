import React, { Component } from "react"

export default class Xamas extends Component {

  componentDidMount() {
    const img  = document.querySelectorAll(".xamas img");
    
    TweenMax.from(img, 2, {
      ease: Elastic.easeOut,
      opacity: 0,
      scale: .5
    });
  }

  render() {
    return(
      <div class="app-holder xamas">
      
        <div class="text-holder">
       
          <img src="./imgs/cacique-2.jpg" />
        
          <h1>Xamas</h1>
          <p>
            Os xamãs, conhecidos também por rezadores, que, ouvindo as vozes 
            e orientações dos deuses, os conduziram a esses espaços para que 
            pudessem neles construir suas aldeias, o tekoa.
          </p>
        </div>
      </div>
    );
  }

}