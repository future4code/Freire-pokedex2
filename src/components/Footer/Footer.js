import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div `

    margin-top: 5vh;
    height: 8vh;
    background-color: #d14444;
    color: azure;
    display: flex;
    align-items: center;
    justify-content: space-around;
    filter: drop-shadow(1px 1px 10px #222);
    
    @media(max-width: 900px) { 
        margin-top: 22%; 
        height: 10vh; 
  }

    @media(max-width: 400px) { 
        height: 10vh; 
        margin-top: 10%; 
  }

   

`

const Footer = () => { 

    return (
        <FooterStyled>
        <h4>POKEDEX</h4>
        <h4>Devs Gustavo e Maycon </h4>
        </FooterStyled>
    )
}

export default Footer; 