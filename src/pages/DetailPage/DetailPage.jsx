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
  SmallButtons2,
} from "./styled";
import { PokemonSearch } from "../../hooks/axios";

const Detail = () => {
  const navigate = useNavigate();

  const NomePokemon = window.localStorage.getItem("IdPokemon");

  const pokemon = PokemonSearch(NomePokemon.toString().toLowerCase());

  let Total = 0;

  const statuLista =
    pokemon &&
    pokemon.data?.stats.map((item) => (Total = item.base_stat + Total));

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
                <h2> #{pokemon.data?.id} </h2>
                <h1> Altura : {pokemon.data?.height} cm</h1>
                <h1> Peso : {pokemon.data?.weight} kg</h1>
                {pokemon.data?.abilities?.map((item, index) => (
                  <h1>
                    Habilidade N°{index + 1} : {item.ability.name}
                  </h1>
                ))}
                {pokemon.data?.types.map((item) => (
                  <h1> Atributo : {item.type.name}</h1>
                ))}
                {pokemon.data?.forms.map((item) => (
                  <h1> Formas : {item.name}</h1>
                ))}
              </PrimeiroCardDetalhe>
              <Titulo>
                <h1> {pokemon.data?.name.toUpperCase()}</h1>
                <img
                  src={pokemon.data?.sprites?.other?.home?.front_default}
                  alt={pokemon.name}
                />
              </Titulo>
              <SegundoCardDetalhe>
                <h2> STATUS </h2>
                {pokemon.data?.stats.map((item) => (
                  <h1>
                    {item.stat.name} : {item.base_stat}
                    <BarraDeProgresso
                      variant={item.stat.name}
                      inputWidth={(item.base_stat + 30).toString() + "px"}
                    ></BarraDeProgresso>
                  </h1>
                ))}
                <h1> Total = {Total} </h1>
              </SegundoCardDetalhe>
            </ContainerDetalhe>
          </ImagemPokemon>
        </Container>
      </ContainerTela>
      <Voltar
        onClick={() => {
          goToVoltar(navigate);
        }}
      ></Voltar>
    </div>
  );
};

export default Detail;
