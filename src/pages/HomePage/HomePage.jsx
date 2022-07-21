import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedexPage, goToDetailPage } from "../../routes/coordinator";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import styled from "styled-components";


    const ContainerTela = styled.div`
    height: 57vh;
    width: 70%;
    background-image: url(${"https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/15.jpg"});
	  padding: 1%;
	  border-radius: 25px;
	  border: 15px #d14444 solid;
    margin: 5% 12% 4% 15%;
;`

  const HomePage = () => {
  const navigate = useNavigate();


  return (
    <>
    <ContainerTela>
      <h4> Home </h4>
      <button onClick={() => goToPokedexPage(navigate)}> Pokedex </button>
    <button onClick={() => goToDetailPage(navigate)}> Detail </button>
    
      <Card> </Card>
    </ContainerTela>
    </>
  );
};

export default HomePage;
