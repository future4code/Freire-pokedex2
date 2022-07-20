import React from "react";
import { useState, useEffect } from "react";
import PokeCard from "../Pokecard/Pokecard";
import axios from "axios";
import {
  Cards,
  ContainerDetalhe,
  ContainerScroll,
  CaptureButton, 
  Stats
} from "./CardStyles";

    
const Card = (props) => {

  const [pokeList, setPokeList] = useState([]);

  const getAllPokeName = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=30")
      .then((res) => {
        setPokeList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllPokeName();
  }, []);


  const mapPokemons =
  pokeList &&
  pokeList.map((pokemon) => {
    return (
      <>
        <PokeCard nome={pokemon.name} />
      </> 
    );
  });

  return (
    <ContainerDetalhe>
      <ContainerScroll>
      <h4> Cards </h4>
      <Cards>
        {mapPokemons}
        </Cards>
        </ContainerScroll>
    </ContainerDetalhe>
  );
};

export default Card;
