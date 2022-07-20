import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 300px;
  margin-left: 30px; 
  margin-right: 40px; 
  height: 400px;
  display: flex;
  justify-content: space-between;
 
`
const CardFather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: grey;
  width: 100%;
  padding: 50px 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transition: 200ms;
  
  &:hover{
    transform: scale(1.03);
  }

  h3{
    margin: 24px auto;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: white;
  }
`

const Imagem = styled.div`
display: inline-flex;
justify-content: center;
  
  img {
    width: 60%;

    &:hover{
    transform: scale(1.5);
  } 
}

`
const Stats = styled.div`
  display: flex;
  justify-content: space-around;
    p {
      color: white;
      font-size: 15px; 
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      text-transform: uppercase; 
    }
    
`
const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {

      pegaPokemon(props.pokemon);

  }, [props.pokemon]);

  const pegaPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.nome}`)
      .then((response) => {
        console.log(pokemon)
        setPokemon(response.data);
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CardContainer>
      <CardFather>
      <h3>{pokemon.name && <>{pokemon.name.toUpperCase()}</>}</h3>
      <Stats>
      <p>{pokemon.types && <>{pokemon.types[0].type.name}</>}</p>
      <p>{ pokemon.types && ( pokemon.types.length>1? <>{pokemon.types[1].type.name}</> :``)}</p>
      </Stats>
      <Imagem>
      {pokemon.sprites && (
        <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
      )}
          </Imagem>
          </CardFather>
    </CardContainer>
  );
};

export default PokeCard;