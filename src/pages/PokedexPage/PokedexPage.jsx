import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToVoltar } from '../../routes/coordinator';
import { ContainerTela, SmallButtons2, Voltar } from './styled';

const Pokedex = () => {
  const navigate = useNavigate()
  return (
    <>
      <ContainerTela>
        <SmallButtons2>
          <button></button>
          <button></button>
        </SmallButtons2>
      </ContainerTela>
      <Voltar onClick={() => goToVoltar(navigate)}></Voltar>
    </>
  );
}
export default Pokedex;