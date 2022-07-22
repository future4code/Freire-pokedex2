import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedexPage } from "../../routes/coordinator";
import Card from "../../components/Card/Card";
import styled from "styled-components";
import bag from "../../assets/bag.png"

    const ContainerTela = styled.div`
    height: 57vh;
    width: 75%;
    background-image: url(${"https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/10.jpg"});
	  padding: 1%;
	  border-radius: 10px;
	  border: 20px #c5baba solid;
    box-shadow: inset 0 0 2em black, 0 0 1em black;
    filter: drop-shadow(10px 10px 10px #222);
    margin: 7% 1% 0 10%;
;`

const Bag = styled.div`
  img { 
    height: 50px;
  }
  margin-left: 93%; 
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    filter: drop-shadow(5px 4px 3px gold);
  }

;`


const SmallButtons2 = styled.div`
display: flex; 
margin-left: 33vw; 
margin-top: -30px; 
position: absolute;  
button {
        border-radius: 50%;
        width: 11px; 
        height: 11px; 
        margin-left: 30px; 
        cursor:pointer; 
        border: outset rgb(248, 187, 187) 1px;
        transform: rotate(60deg);
         background: radial-gradient(
        circle farthest-corner at 40% 25%,
        rgb(230, 237, 241) 1%,
        rgb(220, 214, 237) 20%,
        rgb(110, 120, 100) 62%,
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
    background-color:	#FF0000;
  }
}
}

`






  const HomePage = () => {
  const navigate = useNavigate();


  return (
    <>
    <ContainerTela>
    <SmallButtons2>
      <button></button>
      <button></button>
    </SmallButtons2>
     <Bag><img src={bag} onClick={() => goToPokedexPage(navigate)} 
      /></Bag>
      <Card> </Card>
     
    </ContainerTela>
    </>
  );
};

export default HomePage;
