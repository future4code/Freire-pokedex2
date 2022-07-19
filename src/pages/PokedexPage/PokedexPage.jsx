import React from 'react';
import { useNavigate } from 'react-router-dom';
import {goToHomePage, goToVoltar} from '../../routes/coordinator';

const Pokedex = () => {

  const navigate = useNavigate()
  


  return (<div>
     
            <h4>  Pokedex </h4>
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            <button onClick={() => goToVoltar(navigate)}> voltar </button>
          </div>
   
  );
}


export default Pokedex;