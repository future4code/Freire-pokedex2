import React from 'react';
import { useNavigate } from 'react-router-dom';
import {goToPokedexPage , goToDetailPage} from '../../routes/coordinator';

const HomePage = () => {

  const navigate = useNavigate()
  
  return (<div>
     
            <h4>  Home </h4>
            <button onClick={() => goToPokedexPage(navigate)}> Pokedex </button>
            <button onClick={() => goToDetailPage(navigate)}> Detail </button>
          </div>
   
  );
}


export default HomePage;
