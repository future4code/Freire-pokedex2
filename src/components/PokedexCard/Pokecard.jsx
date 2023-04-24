/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import { CardContainer, CardFather, Imagem, CaptureButton, Stats } from ".";
import { goToDetailPage } from "../../routes/coordinator";
import { useContext } from "react";
import { GlobalContext } from "../../global/context/useContext";

export const PokedexCard = ({ name, id, imagem }) => {
  const navigate = useNavigate();
  const { bolsa, setBolsa } = useContext(GlobalContext);

  const IdPokemon = (namePokemon) => {
    window.localStorage.removeItem("IdPokemon");
    window.localStorage.setItem("IdPokemon", namePokemon);
    goToDetailPage(navigate);
  };

  const SoltarPokemon = (name) => {
    const newArray = bolsa.filter((item, index) => {
      console.log(item[0], name);
      return item[0] === name ? false : item;
    });

    setBolsa(newArray);
  };

  return (
    <CardContainer>
      <CardFather>
        <div onClick={() => IdPokemon(name)}>
          <h3>
            {name && <>{name}</>} <h5>#{id}</h5>
          </h3>
          <Stats></Stats>
          <Imagem>
            <img src={imagem} alt={name} />
          </Imagem>
        </div>
        <CaptureButton variant={false}>
          <img src={pokebola} onClick={() => SoltarPokemon(name, id, imagem)} />
        </CaptureButton>
      </CardFather>
    </CardContainer>
  );
};
