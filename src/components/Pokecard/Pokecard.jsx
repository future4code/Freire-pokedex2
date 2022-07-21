import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import pokebolaTransp from "../../assets/pokebolaTransp.png"
// import pokebola from "../../assets/pokebola.png"
import {
  CardContainer,
  CardFather,
  Imagem,
  CaptureButton, 
  Stats
} from "./PokeStyles";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [pokedexCart, setPokedexCart] = useState()

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

  
  const addPokedex = (id) => {
    //acrescenta 0 p mudar o poke
    for (let i = 0; i < pokemon.length; i++) {
      if (pokemon[i].id === id) {
        //copia add novos poke
        let newPokedex = [...pokedexCart, pokemon[i]]
        setPokedexCart(newPokedex);

      }
    }
  }

  return (
    <CardContainer>
      <CardFather>
        <div onClick={() => console.log('clicou')}>
        <h3 >{pokemon.name && <>{pokemon.name.toUpperCase()}</>}</h3>
        <Stats>
          <p>{pokemon.types && <>{pokemon.types[0].type.name}</>}</p>
          <p>{pokemon.types && (pokemon.types.length > 1 ? <>|{pokemon.types[1].type.name}</> : "")}</p>
          {/* <img src={pokebola} height={25} onClick={console.log('clicou')}/> */}
          {/* <button img={}>Clique</button> */}
        </Stats>
        {/* <img src={pokebolaTransp} height={25}/> */}
          <Imagem>        
          {pokemon.sprites && (
            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
          )}
        </Imagem>
        </div>
        <CaptureButton>
        <img  onClick={() => console.log("cliquei")} src={pokebolaTransp} />
        </CaptureButton>
      </CardFather>
    </CardContainer>
  );
};

export default PokeCard;