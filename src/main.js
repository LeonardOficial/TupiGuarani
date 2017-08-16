// import "babel-polyfill";
import { hashHistory } from "react-router"
import { TweenMax, Power1, Back, CSSPlugin } from "gsap"
import Draggable from "gsap/Draggable"

import "./styles/styles.js"

import "./reactApp.js"

import "./preload.js"


const angles  = [0, 36, 72, 108, 144, 180, 216, 252, 288, 324];
const optsSrc = [
  { src: "indios-fila.jpg"   , route: "/aldeia"      },
  { src: "indios-fila-2.jpg" , route: "/vivencia"    },
  { src: "cacique.jpg"       , route: "/caciques"    },
  { src: "opy-1.jpg"         , route: "/opy"         },
  { src: "cacique-2.jpg"     , route: "/xamas"       },
  { src: "indios.jpg"        , route: "/sociedade"   },
  { src: "indio-face.png"    , route: "/cultura"     },
  { src: "mapa.png"          , route: "/localizacao" },
  { src: "brasil-band.png"   , route: "/estrutura"   },
  { src: ""                  , route: "/fontes"      }, 
];

const menu     = document.querySelector("#menu");
const holders  = document.querySelectorAll(".trapezoid");
const options  = document.querySelectorAll(".trapezoid > div");
const tags     = document.querySelectorAll(".trapezoid > p");
const imgWall  = document.querySelector(".section-holder");
const opacWall = document.querySelector(".section-holder > #opac-wall");


TweenMax.staggerTo(holders, 2, {
  cycle: { rotation: angles }
});

for(let i=0, l=options.length; i<l; i++) {
  
    const hol = holders[i];
    const opt = options[i];
    
    hol.onclick = function() {
    
      TweenMax.to(options, 0.4, {
        opacity: 0.7,
        scale: 1,
        zIndex: 160
      });
      
      TweenMax.set(holders, {
        zIndex: 160
      });
      
      TweenMax.set(tags, {
        zIndex: 1000
      });
      
      TweenMax.to(menu, .4, {
        y: "430px",
        position: "relative"
      });
    
      TweenMax.to(menu, .6, {
        ease: Back.easeOut,
        directionalRotation: (360 - angles[i]) + "_short"
      });
      
      TweenMax.to(opt, .2, {
        ease: Power1.easeOut,
        opacity: 1,
        scale: 1.2,
        zIndex: 100
      });
      
      TweenMax.set(hol, {
        zIndex: 1000
      });
      
      
      
      TweenMax.to(opacWall, .2, {
        delay: .6,
        opacity: 1,
        onComplete: function() {
          TweenMax.set(imgWall, {
            backgroundImage: "url(./imgs/" + optsSrc[i].src + ")",
            onComplete: function() {
              hashHistory.push(optsSrc[i].route);
              TweenMax.to(opacWall, .2, {
                opacity: 0.7
              });
              
            }
          });
        }
      });
      
    }
}






