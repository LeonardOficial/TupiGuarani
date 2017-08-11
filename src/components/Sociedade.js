import React, { Component } from "react"

export default class Sociedade extends Component {

  componentDidMount() {
    const img  = document.querySelectorAll(".sociedade img");
    
    TweenMax.from(img, 2, {
      ease: Elastic.easeOut,
      opacity: 0,
      scale: .5
    });
  }

  render() {
    return(
    
      <div class="app-holder sociedade">
      
        <div class="text-holder">
        
          <img src="./imgs/indios.jpg" />
          
          <h1>Sociedade</h1>
          
          <p>
            As relações sociais e de parentesco, assim como a divisão sexual do 
            trabalho e as relações cosmológicas com os espíritos e os sobrenaturais 
            se reproduzem e se atualizam nesse conglomerado formado por pequenos núcleos, 
            o tekoa, dando sentido ao modo de ser e viver guarani.
          </p>
          
        </div>
        
      </div>
    );
  }

}