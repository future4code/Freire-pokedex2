import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedexPage, goToDetailPage } from "../../routes/coordinator";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";

const HomePage = () => {
  const navigate = useNavigate();


  return (
    <div>
      <h4> Home </h4>

      <button onClick={() => goToPokedexPage(navigate)}> Pokedex </button>
      <button onClick={() => goToDetailPage(navigate)}> Detail </button>

      <Card> </Card>
    </div>
  );
};

export default HomePage;
