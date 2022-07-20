import React from "react";
import { useState, useEffect } from "react";
import PokeCard from "../../components/Card/Pokecard";
import axios from "axios";
import styled from "styled-components";


const Cards = styled.div`
display: flex;
/* flex-wrap: wrap; */
align-items: center;
gap: 15px;
justify-content: center;

`

export const ContainerDetalhe = styled.div`
  background-image: url(${"https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/15.jpg"});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 42vw;
  color: #fff;
  /* justify-content: center; 
  align-items: center; */
;`


export const ContainerScroll = styled.div`

    position: absolute;
    display: grid;
    margin: 5vw 3vw 5vw 2vw;
    padding-left: 10%; 
    padding-bottom: 10%; 
    align-items: center;
    justify-content: center;
    flex-direction: column;


    width: 50vw;
    overflow-x: scroll;
    position: flex;

    ::-webkit-scrollbar{
    width: 15px;
    border: 1px solid #a6ff005c;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb{
    
    background-color: #00ff2abb ;
    border-radius: 10px;
  }`
    
    
const Card = (props) => {

  const [pokeList, setPokeList] = useState([]);

  const getAllPokeName = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
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
    <ContainerDetalhe>
      <ContainerScroll>
      <h4> Cards </h4>
      <Cards>
        {mapPokemons}
        </Cards>
        </ContainerScroll>
    </ContainerDetalhe>
  );
};

export default Card;
