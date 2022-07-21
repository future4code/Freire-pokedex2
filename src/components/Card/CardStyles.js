import styled from "styled-components";

export const Cards = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 25px;

// Tentando fazer melher os pokemons automatico


animation: is-rolar 60s linear infinite;

@keyframes is-rolar {
    to {
      transform: translate3d(-20%, 0px, 0px);
    }
  }

;`

export const ContainerScroll = styled.div`
    display:grid ;
    justify-content: space-between;
    margin: 2vw 2vw;
    padding-right: 15%;  
    padding-bottom: 10%; 
    overflow-x: auto; 
    
    

    ::-webkit-scrollbar{
    width: 15px;
    border: 1px solid #7cfa52;
    border-radius: 10px;

    
    
  }
  ::-webkit-scrollbar-thumb{
    background-color:#7cfa52;
    border-radius: 10px;

  }`
    