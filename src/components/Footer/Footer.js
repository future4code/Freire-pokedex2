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

`

const Footer = () => { 

    return (
        <FooterStyled>
        <h4>POKEDEX</h4>
        <h4>Copyrights© 2022</h4>
        </FooterStyled>
    )
}

export default Footer; 