import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedexPage, goToVoltar } from "../../routes/coordinator";
import Card from "../../components/Card/Card";
import bag from "../../assets/bag.png"
import { ContainerTela, SmallButtons2, Bag, Voltar } from "./styled";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <ContainerTela>
        <SmallButtons2>
          <button></button>
          <button></button>
        </SmallButtons2>
        <Bag>
          <img src={bag} onClick={() => goToPokedexPage(navigate)} />
        </Bag>
        <Card/> 
      </ContainerTela>
      <Voltar onClick={() => {goToVoltar(navigate)}}></Voltar>
    </>
  );
};

export default HomePage;
