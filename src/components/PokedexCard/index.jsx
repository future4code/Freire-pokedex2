import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  height: 250px;
`;

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
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  cursor: pointer;
  filter: saturate(25%);

  &:hover {
    filter: saturate(100%);
  }

  h3 {
    margin: 5px auto;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    color: #d0d0d0;
    user-select: none;
    pointer-events: none;
    justify-content: space-between;
    text-transform: capitalize;
    display: flex;
  }
  h5 {
    font-size: 20px;
    color: #ffffff26;
  }
`;

export const Imagem = styled.div`
  display: inline-flex;
  justify-content: center;

  img {
    pointer-events: none;

    width: 100%;
    user-select: none;
    filter: drop-shadow(5px 5px 5px #222);
  }
`;
export const Stats = styled.div`
  display: flex;

  p {
    color: #d0d0d0;
    font-size: 10px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    text-transform: uppercase;
    justify-content: space-between;
    user-select: none;
    pointer-events: none;
  }
`;

export const CaptureButton = styled.div`
  img {
    width: 20%;
    user-select: none;
    filter: ${(props) =>
      props.variant === true ? "saturate(0)" : "saturate(100%)"};
  }
`;

export const IdPoke = styled.div`
  display: flex;
`;
