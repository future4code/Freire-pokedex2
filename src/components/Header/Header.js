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

        /* button {
            width: 600px;
            .button::after {
             border: groove #460f0f 5px;
    content: "";
    width: 60px;
    height: 60px;
    position: absolute;
    border-radius: 50%;
    left: -10px;
    top: -10px;
    border-style: double;
    opacity: 0.75;
}


        }



} */
`



const Header = () => { 


    return (
        <HeaderStyled>
            {/* <button></button> */}
        </HeaderStyled>
    )
}

export default Header; 