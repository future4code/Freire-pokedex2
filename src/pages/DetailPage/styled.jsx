import styled from "styled-components";

export const Container = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 90vh;
`;

export const ContainerDetalhe = styled.div`

  background-image: url(${"https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/15.jpg"});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 90vw;
  height: 42vw;
  color: #fff;
  
`;

export const Header = styled.div`
  display: flex;
  background: #9ff784;
  width: auto;
  height: 10vh;
`;

export const Titulo = styled.div`

  font-family: "Encode Sans SC", sans-serif;
  color: #333333;
 
  display: grid;
  text-align: center;

  h1 {
    margin-top: -3vw;
  }

  img {  
    margin-top: -10vw;
    filter: drop-shadow(rgba(0, 0, 0, 0.35) 5px 5px 15px);
}
`;

export const ImagemPokemon = styled.div`
  filter: drop-shadow(rgba(0, 0, 0, 0.35) 5px 5px 15px);


`;


export const CardDetalheN1 = styled.div`
  width: 25vw;
  height: 35vw;
  margin-right: 5vw;


  transform-style: preserve-3d;
  // transform: rotateY(45deg); */

  h2{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: absolute;
    top: -30px;
    right: 0;
    font-size: 6em;
    color: rgba(255, 255, 255, 0.150)
  }

  display: flex;
  flex-direction: column;
  h1 {
    font-size: 20px;
  }

  h1,h2{
    pointer-events: none;
    /* transform: translateY(100px); */
    /* opacity: 0; */
    /* transition: 0.5s; */
  }

  position: relative;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  overflow: hide;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);

  /* :hover {

    h1, h2{
    transform: translateY(0px);
    opacity: 100%;}

  } */

`;

export const CardDetalheN2 = styled.div`
  background-color: #000;
  width: 25vw;
  height: 35vw;
  margin-right: 5vw;

  transform-style: preserve-3d;
  /* transform: rotateY(45deg); */

  display: flex;
  flex-direction: column;
  h1 {
    font-size: 20px;
    pointer-events: none;
  }
  position: relative;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);

  overflow: hide;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;
