import React from 'react';
import { useNavigate } from 'react-router-dom';
import {goToHomePage, goToVoltar} from '../../routes/coordinator';

const Detail = () => {

  const navigate = useNavigate()
  


  return (<div>
     
            <h4>  Detail </h4>
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            <button onClick={() => goToVoltar(navigate)}> voltar </button>
          </div>
   
  );
}


export default Detail;