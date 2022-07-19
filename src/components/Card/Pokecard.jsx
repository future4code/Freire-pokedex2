import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {

      pegaPokemon(props.pokemon);

  }, [props.pokemon]);

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        setPokemon(response.data);
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
      )}
    </div>
  );
};

export default PokeCard;