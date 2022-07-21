import styled from "styled-components";

export const Cards = styled.div`
display: flex;
align-items: center;
gap: 30px;
justify-content: center;
margin-top: -18px; 

;`

export const ContainerScroll = styled.div`
    position: absolute;
    display: grid;
    margin: 5vw 2vw;
    padding-right: 15%;  
    padding-bottom: 2%; 
    align-items: center;
    justify-content: center;
    /* flex-direction: column; */
    width: 52%;
    overflow-x: auto;
    /* position: absolute; */
    

    ::-webkit-scrollbar{
    width: 15px;
    border: 1px solid #ff44008f;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb{
    background-color:#ff4400d8;
    border-radius: 10px;
  }`
    