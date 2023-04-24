import styled from "styled-components";

export const ContainerTela = styled.div`
  /* height: 57vh; */
  width: 75%;
  background-image: url(${"https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/10.jpg"});
  padding: 1%;
  border-radius: 10px;
  border: 20px #c5baba solid;
  box-shadow: inset 0 0 2em black, 0 0 1em black;
  filter: drop-shadow(10px 10px 10px #222);
  margin: 7% 1% 0 10%;

  @media (max-width: 600px) {
    width: 60%;
    background-image: url(https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/10.jpg);
    border-radius: 10px;
    border: 20px #c5baba solid;
    box-shadow: inset 0 0 2em black, 0 0 1em black;
    -webkit-filter: drop-shadow(10px 10px 10px #222);
    filter: drop-shadow(10px 10px 10px #222);
    margin: 25% 1% 0 10%;
  }

  @media (max-width: 900px) {
    height: 55vh;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  width: auto;
  height: 57vh;
  margin-left: -5rem;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerDetalhe = styled.div`
  filter: drop-shadow(rgba(0, 0, 0, 0.35) 5px 5px 15px);
  img {
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1vh;
  margin-left: 1vw;
  color: #fff;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Voltar = styled.div`
  position: absolute;
  margin-left: 94vw;
  display: flex;
  margin-top: -35vh;
  align-self: center;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-right: 25px solid #ffee00;
  cursor: pointer;
  animation: pulse-yellow 1s infinite;
  @keyframes pulse-yellow {
    0% {
      transform: scale(0.95);
      filter: drop-shadow(rgba(0, 0, 0, 0.35) 5px 5px 15px);
    }

    70% {
      transform: scale(1);
      border-top: 25px solid transparent;
      border-bottom: 25px solid transparent;
      filter: drop-shadow(rgba(0, 0, 0, 0.35) 5px 5px 15px);
    }

    100% {
      transform: scale(0.95);
      border-top: 25px solid transparent;
      border-bottom: 25px solid transparent;
      filter: drop-shadow(rgba(219, 198, 14, 0.892) 3px 3px 3px);
    }
  }
  :hover {
    border-right: 25px solid #ffc400;
  }
  @media (max-width: 600px) {
    margin-left: 88vw;
    margin-top: -35vh;
  }
`;

export const Titulo = styled.div`
  font-family: "Encode Sans SC", sans-serif;
  color: #d0d0d0;
  margin-left: 1vw;
  text-align: center;
  img {
    filter: drop-shadow(rgba(0, 0, 0, 0.35) 5px 5px 15px);
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -70%;
    margin-left: 27%;
    font-size: 13px;

    img {
      width: 50vh;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -17%;
    margin-left: 27%;
  }
`;

export const ImagemPokemon = styled.div`
  margin-left: 5vw;
  filter: drop-shadow(rgba(0, 0, 0, 0.35) 5px 5px 15px);
  img {
    pointer-events: none;
    width: 25vw;
  }
`;

export const PrimeiroCardDetalhe = styled.div`
  width: 21vw;
  height: 28vw;
  margin-right: 2vw;
  /* transform: skewY(-10deg); // isso aqui que da essa parada de profundidade */

  @media (max-width: 900px) {
    display: none;
  }

  @media (max-width: 600px) {
    display: none;
  }

  h2 {
    margin-left: 5vw;
    margin-bottom: 1vw;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 6em;
    color: #ffffff26;
  }

  h1 {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 20px;
    margin-left: 1.5vw;
    margin-top: 0.6vw;
    color: #d0d0d0;
  }

  /* h1 {
    font-size: 20px;
    pointer-events: none;
    margin-left: 1.5vw;
    margin-top: .8vw;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    perspective: 400vw;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    transform: skewY(20deg);
    padding: .5vw;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.1);
    overflow: hide;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);} */

  h1,
  h2 {
    pointer-events: none;
  }

  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  overflow: hide;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

export const SegundoCardDetalhe = styled.div`
  width: 21vw;
  height: 28vw;
  /* transform: skewY(10deg);// isso aqui que da essa parada de profundidade */
  margin-left: 3.8vw;
  perspective: 400px; // Increases Effect

  h1 {
    font-size: 20px;
    pointer-events: none;
    margin-left: 1.5vw;
    margin-top: 0.9vw;
    color: #d0d0d0;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  h2 {
    text-align: center;
    margin-top: 0.5vw;
    margin-bottom: 1vw;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2.5em;
    color: #ffffff26;
  }

  /* 
:hover{

  transform: rotate(0)

} */

  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  overflow: hide;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);

  @media (max-width: 900px) {
    width: 40vw;
    height: 45vw;
    h1 {
      font-size: 12px;
    }

    h2 {
      font-size: 17px;
    }
  }

  @media (max-width: 600px) {
    width: 40vw;
    height: 45vw;
    margin-top: 20%;
    margin-left: 35%;
    h1 {
      font-size: 12px;
    }

    h2 {
      font-size: 17px;
    }
  }
`;

export const BarraDeProgresso = styled.div`
  height: 0.7vw;
  border-radius: 1vw;
  background-color: ${(props) =>
    props.variant === "hp"
      ? "#c0010190"
      : props.variant === "attack"
      ? "#0030b481"
      : props.variant === "defense"
      ? "#ff480094"
      : props.variant === "special-attack"
      ? "#c8ff0094"
      : props.variant === "special-defense"
      ? "#9a00c983"
      : props.variant === "speed"
      ? "#e600608b"
      : "#000"};
  width: ${(props) => props.inputWidth || 0};
  transition: 1s ease;
  transition-delay: 0.5s;
`;

export const SmallButtons2 = styled.div`
  display: flex;
  margin-left: 33vw;
  margin-top: -30px;
  position: absolute;
  button {
    border-radius: 50%;
    width: 11px;
    height: 11px;
    margin-left: 30px;
    cursor: pointer;
    border: outset rgb(248, 187, 187) 1px;
    transform: rotate(60deg);
    background: radial-gradient(
      circle farthest-corner at 40% 25%,
      rgb(230, 237, 241) 1%,
      rgb(220, 214, 237) 20%,
      rgb(110, 120, 100) 62%
    );
    background: rgba(255, 82, 82, 1);
    animation: pulse-red 2s infinite;
    background-blend-mode: hard-light;
    @keyframes pulse-red {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 1px rgba(255, 82, 82, 0);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
        background-color: #ff0000;
      }
    }
  }

  @media (max-width: 600px) {
    margin-top: -20px;
    margin-left: 60px;
  }
`;
