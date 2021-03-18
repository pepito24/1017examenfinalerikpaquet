import React from "react";
import  {Accueil}  from "../Pages/Accueil";
import  {Apropos}  from "../Pages/Apropos";
import  {Candidats}  from "../Pages/Candidats";
import  {Admin}  from "../Pages/Admin";
import  {Connexion}  from "../Pages/Connexion";

import  {InfoStagiaire}  from "../Pages/InfoStagiaire";
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
          <Route path="/admin" component={Admin}/>
          <Route path="/connexion" component={Connexion}/>
 
          <Route path="/info-stagiaire" component={InfoStagiaire}/>
        </Switch>
      </Router> 
    </>
  );
}

export default App;
