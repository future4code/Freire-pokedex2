import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToVoltar } from "../../routes/coordinator";
import { ContainerTela, SmallButtons2, Voltar } from "./styled";
import { Cards, ContainerScroll } from "../../components/Card/CardStyles";
import { PokedexCard } from "../../components/PokedexCard/Pokecard";
import { GlobalContext } from "../../global/context/useContext";

const Pokedex = () => {
  const navigate = useNavigate();
  const { bolsa } = useContext(GlobalContext);

  const mapPokemons =
    bolsa &&
    bolsa.map((pokemon) => {
      const name = 0;
      const id = 1;
      const imagem = 2;

      return (
        <>
          <PokedexCard
            name={pokemon[name]}
            id={pokemon[id]}
            imagem={pokemon[imagem]}
          />
        </>
      );
    });

  return (
    <>
      <ContainerTela>
        <SmallButtons2>
          <button></button>
          <button></button>
        </SmallButtons2>
        <br />
        <br />

        <ContainerScroll>
          <Cards>
            <Cards>{mapPokemons}</Cards>
          </Cards>
        </ContainerScroll>
      </ContainerTela>
      <Voltar onClick={() => goToVoltar(navigate)}></Voltar>
    </>
  );
};

export default Pokedex;
