import React from "react";
import  {Accueil}  from "../Pages/Accueil";
import  {Apropos}  from "../Pages/Apropos";
import  {Candidats}  from "../Pages/Candidats";
import  {Connecter}  from "../Pages/Connecter";
import '../../style/App.css';
import { Route, Switch } from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <>
      <Router> 
        <Switch>
          <Route path="/" exact component={Accueil}/>
          <Route path="/apropos" component={Apropos}/>
          <Route path="/candidats" component={Candidats}/>
          <Route path="/connecter" component={Connecter}/>
        </Switch>
      </Router> 
    </>
  );
}

export default App;
