import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../routes/coordinator";
import pokebola from "../../assets/pokebola.png"
import {
  CardContainer,
  CardFather,
  Imagem,
  CaptureButton, 
  Stats, 
} from "./PokeStyles";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [pokedexCart, setPokedexCart] = useState()
  const navigate = useNavigate();
  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);
  const pegaPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.nome}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const IdPokemon = () => {
    window.localStorage.removeItem('IdPokemon')
    window.localStorage.setItem("IdPokemon", pokemon.name)
    goToDetailPage(navigate)
  }
  const PokemonCapiturado = () => {
    const pokemonNome = pokemon.name
    window.localStorage.setItem("PokemonCapiturado", [ pokemonNome, true])
  }
  return (
    <CardContainer>
      <CardFather>  
        <div onClick={() => IdPokemon()}>
        <h3 >{pokemon.name && <>{pokemon.name}</>} <h5>#{pokemon.id}</h5></h3>
        <Stats>
          <p>{pokemon.types && <>{pokemon.types[0].type.name}</>}</p>
          <p>{pokemon.types && (pokemon.types.length > 1 ? <>|{pokemon.types[1].type.name}</> : "")}</p>
        </Stats>
          <Imagem>        
          {pokemon.sprites && (
            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
          )}
        </Imagem>
        </div>
        <CaptureButton>
        <img src={pokebola} />
        </CaptureButton>
      </CardFather>
    </CardContainer>
  );
};
export default PokeCard;