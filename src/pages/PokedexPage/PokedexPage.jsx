import React from 'react';
import { useNavigate } from 'react-router-dom';
import {goToHomePage, goToVoltar} from '../../routes/coordinator';
import styled from 'styled-components';

 
  const ContainerTela = styled.div`
  height: 57vh;
  width: 70%;
  background-image: url(${"https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/15.jpg"});
  padding: 1%;
  border-radius: 25px;
  border: 15px #d14444 solid;
  margin: 5% 12% 4% 15%;
;`


const Pokedex = () => {

  const navigate = useNavigate()


  return (
     <ContainerTela>
            <h4>  Pokedex </h4>
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            <button onClick={() => goToVoltar(navigate)}> voltar </button>
            </ContainerTela>
  );
}


export default Pokedex;