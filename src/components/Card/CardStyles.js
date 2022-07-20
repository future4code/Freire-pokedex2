import styled from "styled-components";

export const Cards = styled.div`
display: flex;
align-items: center;
gap: 15px;
justify-content: center;

;`
export const ContainerDetalhe = styled.div`
  background-image: url(${"https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/15.jpg"});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 42vw;
  color: #fff;
;`

export const ContainerScroll = styled.div`
    position: absolute;
    display: grid;
    margin: 5vw 3vw 5vw 2vw;
    padding-left: 10%; 
    padding-bottom: 10%; 
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 50vw;
    overflow-x: scroll;
    position: flex;

    ::-webkit-scrollbar{
    width: 15px;
    border: 1px solid #ff44008f;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb{
    
    background-color:#ff4400d8;
    border-radius: 10px;
  }`
    