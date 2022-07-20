import { useNavigate } from "react-router-dom";
import { goToHomePage, goToVoltar } from "../../routes/coordinator";
import {
  Container,
  Header,
  ImagemPokemon,
  Titulo,
  CardDetalheN1,
  CardDetalheN2,
  ContainerDetalhe,
} from "./styled";
import { PokemonSearch } from "../../hooks/axios";
import { useEffect, useState } from "react";
// import { LimitadorDeApi } from "../../hooks/axios";

const Detail = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({ name: "68" });

  const pokemon = PokemonSearch(formValues.name.toString().toLowerCase());

  useEffect(() => {},[formValues])

  const onChange = (event) => {
    const { name, value } = event.target;
    console.log(formValues);
    setFormValues({ ...formValues, [name]: value });
    
  };


  useEffect(() => { }, [formValues])

  console.log(pokemon);

  // const todosPokemon = LimitadorDeApi(20);

  // console.log(
  //   todosPokemon &&
  //     todosPokemon.data?.results?.map((item) => console.log(item.name))
  // );

  console.log(pokemon.data)


  return (
    <div>
      <Header>
        <h4> Detail </h4>

        <button onClick={() => goToVoltar(navigate)}> voltar </button>
        <button onClick={() => goToHomePage(navigate)}> HomePage </button>
      </Header>

      <input
        type={"search"}
        placeholder="Pesquisar"
        name="name"
        onChange={onChange}
        required
        value={formValues.name || ""}
      ></input>

      <Container>
        <ImagemPokemon>
          <ContainerDetalhe>
            <CardDetalheN1>
              <h1> ID {pokemon.data?.id} </h1>
              <h1> Peso {pokemon.data?.weight} </h1>
              <h1> Altura {pokemon.data?.height} </h1>
              {pokemon.data?.abilities?.map((item, index) => <h1> Habilidade º {index + 1} : {item.ability.name} </h1>)}
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
              {pokemon.data?.stats.map((item) => <h1> {item.stat.name} : {item.base_stat}</h1>)}
            </CardDetalheN2>
          </ContainerDetalhe>
        </ImagemPokemon>
      </Container>
    </div>
  );
};

export default Detail;
