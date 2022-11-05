import { useNavigate } from "react-router-dom";
import { goToVoltar } from "../../routes/coordinator";
import {
  ContainerTela, 
  Container,
  ImagemPokemon,
  Titulo,
  SegundoCardDetalhe,
  ContainerDetalhe,
  PrimeiroCardDetalhe,
  Voltar,
  BarraDeProgresso,
  SmallButtons2
} from "./styled";
import { PokemonSearch } from "../../hooks/axios";
import { useState } from "react";

const Detail = () => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState('')
  const NomePokemon = window.localStorage.getItem('IdPokemon')
  const result = PokemonSearch(NomePokemon.toString().toLowerCase())
      result.then((response) => {
      setPokemon(response)
  })
  return (
    <div>
      <ContainerTela>
      <SmallButtons2>
        <button></button>
        <button></button>
      </SmallButtons2>
        <Container>
          <ImagemPokemon>
            <ContainerDetalhe>
                <PrimeiroCardDetalhe>
                  <h2> #{pokemon && pokemon.id} </h2>
                  <h1> Altura : {pokemon && pokemon.height} cm</h1>
                  <h1> Peso : {pokemon && pokemon.weight} kg</h1>
                  {pokemon && pokemon.abilities?.map((item, index) => <h1> Habilidade N°{index + 1} : {item.ability.name} </h1>)}
                  {pokemon && pokemon.types.map((item) => <h1> Atributo : {item.type.name}</h1>)}
                  {pokemon && pokemon.forms.map((item) => <h1> Formas : {item.name}</h1>)}
                </PrimeiroCardDetalhe>
              <Titulo>
                <h1> {pokemon && pokemon.name.toUpperCase()}</h1>
                <img
                  src={pokemon && pokemon.sprites?.other?.home?.front_default}
                  alt={pokemon && pokemon.name}
                />
              </Titulo>
              <SegundoCardDetalhe>
                <h2> STATUS </h2>
                {pokemon && pokemon.stats.map((item)  => <h1> {item.stat.name} : {item.base_stat} <BarraDeProgresso inputWidth={(item.base_stat + 30).toString() + 'px'}  ></BarraDeProgresso></h1>)}
              </SegundoCardDetalhe>
            </ContainerDetalhe>
          </ImagemPokemon>
        </Container>
      </ContainerTela>
      <Voltar onClick={() => {goToVoltar(navigate)}}></Voltar>
    </div>
  );
};
export default Detail;