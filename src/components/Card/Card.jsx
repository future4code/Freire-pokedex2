import React from "react";
import { useState, useEffect } from "react";
import PokeCard from "../Pokecard/Pokecard";
import axios from "axios";
import {
  Cards,
  ContainerScroll,
} from "./CardStyles";
    
const Card = (props) => {

  const [pokeList, setPokeList] = useState([]);


  const getAllPokeName = () => {
    axios

      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
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
  pokeList.map((pokemon, index) => {
    return (
      <>
        <PokeCard key={index} nome={pokemon.name} />
      </> 
    );
  });

  return (
    <>
      <ContainerScroll>
        <Cards>
        {mapPokemons}
        </Cards>
        </ContainerScroll>
    </>
  );
};

export default Card;
