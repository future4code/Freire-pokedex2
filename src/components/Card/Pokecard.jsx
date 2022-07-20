import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import pokebolaTransp from "../../assets/pokebolaTransp.png"
import pokebola from "../../assets/pokebola.png"

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  height: 200px;
  margin-left: 30px; 
  margin-right: 40px; 
`
const CardFather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: grey;
  width: 100%;
  padding: 20px 15px;
  border-radius: 30px;
  transition: 200ms;
  
  /* &:hover{
    transform: scale(1);} */
    &:hover {
      box-shadow: 1px 3px 10px 2px #FF4500;
       
  }

  h3{
    margin: 5px auto;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: white;
  }
`

const Imagem = styled.div`
display: inline-flex;
justify-content: center;
  
  img {
    width: 100%;
    
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
      font-size: 10px; 
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
          <p>{pokemon.types && (pokemon.types.length > 1 ? <>{pokemon.types[1].type.name}</> : ``)}</p>
          {/* <img src={pokebola} height={25} onClick={console.log('clicou')}/> */}
          <img src={pokebolaTransp} height={25}/>
          {/* <button img={}>Clique</button> */}
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