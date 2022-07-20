import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedexPage, goToDetailPage } from "../../routes/coordinator";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import styled from "styled-components";


const HomeContainer = styled.div`
  display: flex;
  width: 100%;



`


const HomePage = () => {
  const navigate = useNavigate();


  return (
    <>
     
      <h4> Home </h4>
      <button onClick={() => goToPokedexPage(navigate)}> Pokedex </button>
    <button onClick={() => goToDetailPage(navigate)}> Detail </button>
    <HomeContainer>
      <Card> </Card>
    </HomeContainer>
    </>
  );
};

export default HomePage;
