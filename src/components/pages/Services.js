import React from 'react';
import '../../App.css';
// import {Form, Button} from 'react-bootstrap' ;
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function Services() {
  return (
    <div>
      
  <h2 className='services'>MAINTENANCE
  DE SYSTÈME DE SÉCURITÉ ÉLECTRONIQUE</h2>
  <p>Une structure souple, organisée, performante et réactive.

  Les techniciens de la société sont hautement qualifiés : ils assurent les raccordements, les réglages, les tests, ainsi que les procédures de réception, les contrôles, les services d’entretien et de maintenance.
  
  Des équipements de pointes pour vous garantir une meilleure qualité de service.
  
  Nous intervenons sur tous les systèmes.</p>
    
    <form>
      <span>
        <input type="text" placeholder="Nom et Prénom" required></input>
      </span>
      <span>
        <input type="email" placeholder="Email" required></input>
      </span>
      <span>
        <input type="textarea" placeholder="" required></input>
      </span>
      <button>Soumettre!</button>
    </form>
  </div>
  );
}
