import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div `

    /* margin-bottom: 2rem;     */
	height: 5vh;
	background-color: #d14444;
    padding-top: 25px; 
    filter: drop-shadow(5px 5px 5px #222);
    &:after {
        /* display: flex;  */
    content: "";
    margin-top: -43px;
	margin-left: -20px;
	border-top: 10vh solid #d14444;
	border-right: 40px solid transparent;
	width: 40%;
	position: absolute;
    z-index: -1; 
    }

     button {
        border-radius: 50%;
        display: flex; 
        align-content:center ;
        width: 70px; 
        height: 70px; 
        margin-left: 25px; 
        border: white; 
        cursor:pointer; 
        border: outset rgb(248, 187, 187) 6px;
        transform: rotate(60deg);
        background: radial-gradient(
        circle farthest-corner at 40% 25%,
        rgb(218, 237, 241) 9%,
        rgb(124, 214, 237) 20%,
        rgb(64, 90, 165) 62%,
        rgb(43, 125, 196) 100%
    );
    background-blend-mode: hard-light;
    background-color: #09a8ff;

/* 
        &::after {
        margin-top: 31px; 
        margin-left: -29px; 
        display: flex; 
        align-content:center ;
        content: "";
        width: 69px;
        height: 69px;
        position: absolute;
        border-radius: 50%;
        left: 50px;
        top: -10px;
}       */
        &:hover{ 
            background-color: #7CFC00;
        }

        }
`






const Header = () => { 

    return (
        <>
        <HeaderStyled>
        <button></button>
        </HeaderStyled>
        </>
    )
}

export default Header; 