import React, { Component } from "react"
import { TweenMax, Back, Elastic } from "gsap"

export default class AldeiaTekoaSapukai extends Component {

  componentDidMount() {
    const header    = document.querySelector(".aldeia h1");
    const centerImg = document.querySelectorAll(".aldeia img");
    const textBody  = document.querySelectorAll(".text-holder");
    
    TweenMax.from(header, 2, {
      ease: Elastic.easeOut,
      opacity: 0,
      y: "-=100px"
    });
    
    TweenMax.from(centerImg, 2, {
      ease: Elastic.easeOut,
      scale: .1
    });
    
    TweenMax.from(textBody, 2, {
      ease: Elastic.easeOut,
      opacity: 0,
      y: "+=100px"
    });
    
  }

  render() {
    return(
    
      <div class="app-holder aldeia">
        
        <h1>Aldeia Tekoa Sapukai</h1>
      
        <div class="text-holder">
          
          <p>
            Sim, existem índios no Rio de Janeiro! E uma quantidade expressiva vive em Angra dos Reis,
            eles são índios guaranis do subgrupo Mbya, segundo a tradição que busca incessatenmente a
            busca pelo paraíso, este pode ser alcançado em vida, eles precisam cumprir e respeitar um conjunto de 
            regras e uma conduta divina que lhes são transmitidas pelos xamãs. São elas que norteiam as relações que mantém com
            a natureza, com todos os seres humanos e com os espíritos.
           </p>
          
        </div>
        
        <img src="./imgs/indios-fila.jpg" />
        
      </div>
    );
  }

}


