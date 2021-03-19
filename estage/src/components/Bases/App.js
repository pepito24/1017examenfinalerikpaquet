import React from "react";
import  {Accueil}  from "../Pages/Accueil";
import  {Apropos}  from "../Pages/Apropos";
import  {Candidats}  from "../Pages/Candidats";
import  {Admin}  from "../Pages/Admin";
import  {Stages}  from "../Pages/Stages";
import  {Confidentialite}  from "../Pages/Confidentialite";
import  {Connexion}  from "../Pages/Connexion";
import  {Contact}  from "../Pages/Contact";
import  {InfoStagiaire}  from "../Pages/InfoStagiaire";
import { Route, Switch } from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import '../../style/App.css';

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
          <Route path="/stages" component={Stages}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/confidentialite" component={Confidentialite}/>
          <Route path="/info-stagiaire" component={InfoStagiaire}/>
        </Switch>
      </Router> 
    </>
  );
}

export default App;
