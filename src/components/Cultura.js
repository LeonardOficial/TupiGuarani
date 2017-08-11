import React, { Component } from "react"
import { TweenMax, Back } from "gsap"

export default class Cultura extends Component {

  render() {
  
    return(
      <div class="app-holder cultura">    
                             
        <div class="text-holder">
        
          <h1>Cultura</h1>
          
          <p>
            Os indígenas dessa tribo preservam o <font color="#f98629">artesanato guarani</font>, pois além de ser uma tradição antiga, 
            garante o sustento em virtude da grande apreciação por parte dos turistas, que se encantam com 
            os  <font color="#FAAB22">coloridos cestos</font>,  <font color="#FAAB22">arcos e flechas</font>,  <font color="#FAAB22">colares</font>,  <font color="#FAAB22">pulserias</font> e os  <font color="#825139">bichinhos esculpidos em madeira</font>. 
            <font color="#e9c108">Musica</font> e <font color="#e9c108">dança</font> também tem grande espaço de apreciação entre os índios, os jovens em sua maioria sabem
            tocar <font color="#e9c108">violão</font> e <font color="#e9c108">rabeca</font> (um tipo de violino rústico), além de praticarem o <font color="#e9c108">canto coral</font>, preservam também em 
            seus costumes danças que possuem algumas especificidades, umas são apenas para meninos, outras somente para
            meninas e outras mais para os adultos. Há quinhentos anos os Guaranis têm enfrentado o desafio de sobreviver de acordo 
            com suas tradições, interagindo com a sociedade brasileira. Vêm selecionando e incorporando às suas tradições e valores as 
            novas necessidades e conhecimentos advindos dessa relação. O jeito de ser guarani, “nhandereko”, e os costumes deste simples 
            e simpático povo pode ser conhecido através de visitas guiadas a aldeia, que são agendadas com direito a
            um mergulho na bela <font color="#28afc8">cachoeira do bracuì</font>.
          </p>
        </div>
        
      </div>
    );
  }

}