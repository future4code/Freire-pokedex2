import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  height: 200px;
  /* /* margin-left: 50px;  */
  /* margin-right: 20px;  */ 
`

export const CardFather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding: 20px 15px;
  border-radius: 30px;
  transition: 200ms;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer; 
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  
    &:hover {
      box-shadow: 1px 3px 10px 2px #ff44008f;
       
  }

  h3{
    margin: 5px auto;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: black;
    user-select: none;
    pointer-events:none;
  }
`

export const Imagem = styled.div`
display: inline-flex;
justify-content: center;
  
  img {
    width: 100%;
    user-select: none;
    pointer-events:none;
    
    &:hover{
    transform: scale(1.5);
  } 
}
`
export const Stats = styled.div`
  display: flex;

    p {
      color: black;
      font-size: 10px; 
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      text-transform: uppercase; 
      justify-content: space-between;
      user-select: none;
      pointer-events:none;
    }
`

export const CaptureButton = styled.div`

img { 
  width: 20%; 
  user-select: none;
  pointer-events:none;
}
`