import { useNavigate } from "react-router-dom";
import { goToHomePage, goToVoltar } from "../../routes/coordinator";
import {
  Container,
  Header,
  ImagemPokemon,
  Titulo,
  CardDetalheN2,
  ContainerDetalhe,
  CardDetalheN1
} from "./styled";
import { PokemonSearch } from "../../hooks/axios";
import { useEffect, useState } from "react";

// import { LimitadorDeApi } from "../../hooks/axios";

const Detail = () => {
  const navigate = useNavigate();

  const NomePokemon = "pikachu"
  const statuTotal = 0

  const pokemon = PokemonSearch(NomePokemon.toString().toLowerCase());

  console.log(pokemon);

  console.log(pokemon.data)


  return (
    <div>
      <Header>
        <h4> Detail </h4>

        <button onClick={() => goToVoltar(navigate)}> voltar </button>
        <button onClick={() => goToHomePage(navigate)}> HomePage </button>
      </Header>

      <Container>
        <ImagemPokemon>
          <ContainerDetalhe>
              <CardDetalheN1>
                <h2> #{pokemon.data?.id} </h2>
                <h1> Altura {pokemon.data?.height} </h1>
                <h1> Peso {pokemon.data?.weight} </h1>
                {pokemon.data?.abilities?.map((item, index) => <h1> Habilidade Âº {index + 1} : {item.ability.name} </h1>)}
                {pokemon.data?.types.map((item) => <h1> Atributo : {item.type.name}</h1>)}
                {pokemon.data?.forms.map((item) => <h1> Formas : {item.name}</h1>)}
              </CardDetalheN1>
            <Titulo>
              <h1> {pokemon.data?.name.toUpperCase()}</h1>
              <img
                src={pokemon.data?.sprites?.other?.home?.front_default}
                alt={pokemon.name}
              />
            </Titulo>
            <CardDetalheN2>
              {pokemon.data?.stats.map((item)  => <h1> {item.stat.name} : {item.base_stat}</h1>)}
              <h1> Total = {} </h1>
            </CardDetalheN2>
          </ContainerDetalhe>
        </ImagemPokemon>
      </Container>
    </div>
  );
};

export default Detail;
