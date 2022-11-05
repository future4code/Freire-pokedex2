import React from "react";
import { useState } from "react";
import PokeCard from "../Pokecard/Pokecard";
import { Cards, ContainerScroll } from "./CardStyles";
import { getAllPokeName } from "../../hooks/axios";
    
const Card = (props) => {
  const [pokeList, setPokeList] = useState([])
  const result = getAllPokeName()
    result.then((response) => {
      setPokeList(response.results)
  })
  return (
    <>
      <ContainerScroll>
        <Cards>
        {
          pokeList && pokeList.map((pokemon) => {
            return (
              <>
                <PokeCard nome={pokemon.name}/>
              </> 
            )
          })
        }
        </Cards>
        </ContainerScroll>
    </>
  );
};
export default Card;