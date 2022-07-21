import styled from "styled-components";


export const ContainerTela = styled.div`
height: 58vh;
width: 75%;
background-image: url(${"https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/10.jpg"});
padding: 1%;
border-radius: 25px;
border: 15px #d14444 solid;
margin: 5.5% 1% 4% 10%;
user-select: none;
;`

export const Container = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  background-position: center;
  width: auto;
  height: 100vh; 

  
`;

export const ContainerDetalhe = styled.div`



filter: drop-shadow(rgba(0, 0, 0, 0.35) 5px 5px 15px);
  img{width: 30vw;}

  background-position: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 80vw;
  margin-top: 2vw;
  color: #fff;

  
`;


export const Voltar = styled.div`

  margin-left: 5vw;
  display: flex;
  width: 0; 
  height: 0; 
  margin-bottom: 30vw;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent; 
  border-right:25px solid #ffee00; 
  cursor: pointer;

  :hover{

    border-right:25px solid #ffc400; 

  }

`;


export const Titulo = styled.div`

  font-family: "Encode Sans SC", sans-serif;
  color: #ffffff;
  margin-left: 1vw;
 
  display: grid;
  text-align: center;
  margin-bottom: 30vw; 


  img {  
    
    filter: drop-shadow(rgba(0, 0, 0, 0.35) 5px 5px 15px);
}
`;

export const ImagemPokemon = styled.div`
  margin-left: 5vw;
  filter: drop-shadow(rgba(0, 0, 0, 0.35) 5px 5px 15px);
  img{
    pointer-events:none;
    width: 30vw;}

`;

export const PrimeiroCardDetalhe = styled.div`
  width: 21vw;
  height: 32vw;
  margin-left: 4vw;
  flex-direction: column;

  /* perspective: 400px;
  :hover{

    transform: rotate(0)

  }

  transition: .1s;
  transform: rotateY(45deg); */

  h2{
    margin-left: 5vw;
    margin-bottom: 3vw;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 6em;
    color: #ffffff26
  }

  h1 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 21px;
    margin-left: 1.5vw;
    margin-top: 1vw;
  }

  h1,h2{
    pointer-events: none;
    /* transform: translateY(100px); */
    /* opacity: 0; */
    /* transition: 0.5s; */
  }

  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  overflow: hide;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);

  /* :hover {

    h1, h2{
    transform: translateY(0px);
    opacity: 100%;}

  } */

`;

export const SegundoCardDetalhe = styled.div`
  background-color: #000;
  width: 21vw;
  height: 32vw;
  margin-right: 5vw;
  
  /* transform: rotateY(45deg); */

  h1 {
    font-size: 20px;
    pointer-events: none;
    margin-left: 1.5vw;
    margin-top: 1vw;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  }

  h2{
    text-align: center;
    margin-top: 1vw;
    margin-bottom: 3vw;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2.5em;
    color: #ffffff26
  }


  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  overflow: hide;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

export const BarraDeProgresso = styled.div`
  
  height: .7vw;
  border-radius: 1vw;
  background-color: #d7eeb2; 
  width: ${props => props.inputWidth || 0};



`;

