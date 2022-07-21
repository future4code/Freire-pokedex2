import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div `

    margin-bottom: 2rem;    
	height: 8vh;
	background-color: #d14444;

    &:after {
    content: "";
    margin-top: 7vh;
	margin-left: -25px;
	border-top: 7vh solid #d14444;
	border-right: 40px solid transparent;
	width: 40%;
	position: absolute;
}
`

const Header = () => { 

    return (
        <HeaderStyled>
            oiii  
        </HeaderStyled>
    )
}

export default Header; 