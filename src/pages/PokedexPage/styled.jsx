import styled from "styled-components";

export const ContainerTela = styled.div`
  height: 57vh;
  width: 75%;
  background-image: url(https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/10.jpg);
  padding: 1%;
  border-radius: 10px;
  border: 20px #c5baba solid;
  box-shadow: inset 0 0 2em black, 0 0 1em black;
  filter: drop-shadow(10px 10px 10px #222);
  background-repeat: no-repeat;

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
    background: #aa3030;
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
      filter: drop-shadow(rgba(0, 0, 0, 0.35) 5px 5px 15px);
    }

    70% {
      border-top: 25px solid transparent;
      border-bottom: 25px solid transparent;
      filter: drop-shadow(rgba(0, 0, 0, 0.35) 5px 5px 15px);
    }

    100% {
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
