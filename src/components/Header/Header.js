import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import { HeaderStyled, SmallButtons, SmallButtons2, SmallButtons3 } from "./styled";

const Header = () => { 
    const navigate = useNavigate();
    return (
        <>
        <HeaderStyled>
            <button onClick={() => goToHomePage(navigate)} ></button>
        </HeaderStyled>
        <SmallButtons>
            <button ></button>
            <SmallButtons2>
                <button ></button>
            </SmallButtons2>
            <SmallButtons3>
                <button ></button>
            </SmallButtons3>
        </SmallButtons>
        </>
    )
}
export default Header; 