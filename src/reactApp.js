//import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Aldeia      from "./components/AldeiaTekoaSapukai"
import Vivencia    from "./components/Vivencia"
import Opy         from "./components/Opy"
import Caciques    from "./components/Caciques"
import Xamas       from "./components/Xamas"
import Sociedade   from "./components/Sociedade"
import Cultura     from "./components/Cultura"
import Localizacao from "./components/Localizacao"
import Estrutura   from "./components/Estrutura"
import Fontes      from "./components/Fontes"

const root = document.getElementById("react-root");

const App = ({children}) => {
  return(
    <div>
      { children }
    </div>
  );
}

const HomePage = () => {
  return(
    <div> </div>
  );
}

render(
  <Router history={hashHistory} >
  
    <Route path="/" component={App} >
      <IndexRoute component={HomePage} />
      <Route path="/aldeia"      component={Aldeia} />
      <Route path="/vivencia"    component={Vivencia} />
      <Route path="/opy"         component={Opy} />
      <Route path="/Caciques"    component={Caciques} />
      <Route path="/xamas"       component={Xamas} />
      <Route path="/sociedade"   component={Sociedade} />
      <Route path="/cultura"     component={Cultura} />
      <Route path="/localizacao" component={Localizacao} />
      <Route path="/estrutura"   component={Estrutura} />
      <Route path="/fontes"      component={Fontes}  />
    </Route>
    
  </Router>
  
, root);



