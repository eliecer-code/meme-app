import styled from "styled-components";

export const ContainerMain = styled.div`
  height: 100vh;
  background: red;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.main`
  background: #101;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  @media (min-width: 500px) {
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 82.7%;
  background: #101;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 500px) {
  }
`;

export const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 5px;
  border-radius: 0.5em;
  border: none;
  @media (min-width: 500px) {
    width: 300px;
  }
`;

export const Texto1 = styled.span`
  display: block;
  font-size: 1.5em;
  position: absolute;
  top: 25px;
  font-family: sans-serif;
  text-align: center;
  color: #fff;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000,
    0 -2px 0 rgb(255 250 250), 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000;
`;
export const Texto2 = styled.span`
  display: block;
  font-size: 1.5em;
  position: absolute;
  bottom: 25px;
  font-family: sans-serif;
  text-align: center;
  color: #fff;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000,
    0 -2px 0 rgb(255 250 250), 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000;
`;

export const Img = styled.img`
  width: 100%;
  transition: all 0.5s ease;
  @media (min-width: 500px) {
    width: 350px;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 30px;
  border-radius: 0.5em;
  @media (min-width: 500px) {
    width: 300px;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  font-family: sans-serif;
  font-weight: bold;
  background-color: #fff;
  border-radius: 0.5em;
  border: none;
  margin: 10px 0 10px 0;
  transition: all 0.2s;
  outline: 2px solid;
  &:hover {
    background-color: #ff1;
    cursor: pointer;
    outline: 2px solid white;
  }
`;

export const Title = styled.h1`
  font-size: 1.2em;
  color: white;
  &:hover {
    border-color: 1px solid #000;
  }
`;
