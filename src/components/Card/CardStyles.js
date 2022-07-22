import styled from "styled-components";

export const Cards = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 25px;

animation: is-rolar 60s linear infinite;

@keyframes is-rolar {
    to {
      transform: translate3d(-20%, 0px, 0px);
    }
  }


  @media (max-width: 900px) { 
  margin-left: 60px; 
  margin-top: 70px; 
  }

  
  @media (max-width: 600px) { 
   margin-left: 60px; 
   margin-top: 5px; 
  }

;`

export const ContainerScroll = styled.div`
    display:grid ;
    justify-content: space-between;
    margin: 1vw 0;
    padding-right: 15%;  
    padding-bottom: 2%; 
    overflow-x: auto; 
    
  @media (max-width: 900px) { 
    margin: 30vw 0; 
    padding-bottom: 17%; 
  }
  
  @media (max-width: 600px) { 
   margin: 0 0; 
   
  }

    ::-webkit-scrollbar{
    width: 15px;
    border: 1px solid #7cfa52;
    border-radius: 10px;

    
    
  }
  ::-webkit-scrollbar-thumb{
    background-color:#7cfa52;
    border-radius: 10px;

  }`
    