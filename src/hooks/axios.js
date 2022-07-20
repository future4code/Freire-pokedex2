import axios from "axios";
import { useEffect, useState } from "react";


// funcionando lista de viagens disponiveis
export const PokemonSearch = (NomePokemon) => {

  const [pokemonRecebido, setPokemonRecebido] = useState([])

  useEffect(() => {

    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${NomePokemon}`
      )
      .then((response) => {
        setPokemonRecebido(response)

      })
      .catch((err) => {
        console.log(err);
      });

  }, [])

  return pokemonRecebido

};




export const LimitadorDeApi = (quantidadePokemon) => {

  const [LimitadorDeApi, setPokemonRecebido] = useState([])

  useEffect(() => {

    axios
      .get(
        ` https://pokeapi.co/api/v2/pokemon?limit=${quantidadePokemon}&offset=0`
      )
      .then((response) => {
        setPokemonRecebido(response)

      })
      .catch((err) => {
        console.log(err);
      });

  }, [])

  return LimitadorDeApi

};