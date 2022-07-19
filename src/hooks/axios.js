import axios from "axios";
import { useEffect, useState } from "react";


// funcionando lista de viagens disponiveis
export const PokemonSearch = (NomePokemon) => {
  
  const [pokemonRecebido, setPokemonRecebido]  = useState([])

  useEffect(() => {

    axios
    .get(
      `https://pokeapi.co/api/v2/pokemon/pikachu`
    )
    .then((response) => {
      setPokemonRecebido(response)
      console.log(response)

    })
    .catch((err) => {
      console.log(err);
    });

  },[] )

    return pokemonRecebido
    
};