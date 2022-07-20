import React from "react";
import { useState, useEffect } from "react";
import PokeCard from "../../components/Card/Pokecard";
import axios from "axios";
import styled from "styled-components";



const Cards = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
justify-content: space-between;

`
const Card = (props) => {

  const [pokeList, setPokeList] = useState([]);



  const getAllPokeName = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=28")
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
    <div>
      <h4> Cards </h4>
      <Cards>
        {mapPokemons}
        </Cards>
    </div>
  );
};

export default Card;
