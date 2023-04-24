/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../routes/coordinator";
import pokebola from "../../assets/pokebola.png";
import {
  CardContainer,
  CardFather,
  Imagem,
  CaptureButton,
  Stats,
} from "./PokeStyles";
import { useContext } from "react";
import { GlobalContext } from "../../global/context/useContext";

const PokeCard = ({ nome }) => {
  const [pokemon, setPokemon] = useState([]);
  const { bolsa, setBolsa } = useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {
    pegaPokemon(nome);
  }, []);

  const pegaPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const IdPokemon = () => {
    window.localStorage.removeItem("IdPokemon");
    window.localStorage.setItem("IdPokemon", pokemon.name);
    goToDetailPage(navigate);
  };

  const PokemonCapiturado = (name, idPokemon, imagem) => {
    setBolsa((bolsa) => [...bolsa, [...[name, idPokemon, imagem]]]);
    console.log(bolsa);
  };

  const PokemonNaPokedex = (name) => {
    const result = bolsa.filter((item) => {
      return item[0] === name;
    });

    return result.length === 0;
  };

  return (
    <CardContainer>
      <CardFather>
        {pokemon && pokemon.name === undefined ? (
          <h6> Carregando... </h6>
        ) : (
          <>
            <div onClick={() => IdPokemon()}>
              <h3>
                {pokemon.name && <>{pokemon.name}</>} <h5>#{pokemon.id}</h5>
              </h3>
              <Stats>
                <p>{pokemon.types && <>{pokemon.types[0].type.name}</>}</p>
                <p>
                  {pokemon.types &&
                    (pokemon.types.length > 1 ? (
                      <>|{pokemon.types[1].type.name}</>
                    ) : (
                      ""
                    ))}
                </p>
              </Stats>
              <Imagem>
                {pokemon.sprites && (
                  <img
                    src={pokemon.sprites.other.home.front_default}
                    alt={pokemon.name}
                  />
                )}
              </Imagem>
            </div>
            <CaptureButton variant={PokemonNaPokedex(pokemon.name)}>
              <img
                src={pokebola}
                onClick={() =>
                  PokemonCapiturado(
                    pokemon.name,
                    pokemon.id,
                    pokemon.sprites.other.home.front_default
                  )
                }
              />
            </CaptureButton>
          </>
        )}
      </CardFather>
    </CardContainer>
  );
};

export default PokeCard;
