import styled from "styled-components";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const Container = styled.div`
  align-self: center;
  width: 95%;
  height: 87%;
  margin-top: 20px;
  border-spacing: 0px 10px;
  border-radius: 12px;
  ${fonts[700]};
  color: ${colors.DarKGray};
  background: #fff;
  text-align: center;
  overflow: auto;
    -ms-overflow-style: none;
    ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 30px !important;
    margin-right: 70px !important;
    }
    ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
    border-radius: 30px !important;
    margin-right: 30px;
    }
    ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 30px !important;
    margin-right: 30px !important;
  }
`;

export const Content = styled.div`
  padding-top: 59px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between; 
    /* background-color: yellow;  */
  }
  h1 {
    font-size: 24px;
    font: ${fonts[700]};
    color: ${colors.dark};
    margin-left: 62px; 
  }
  button {
    width: 50px;
    height: 50px;
    font-size: 32px; 
    margin-right: 50px; 
    border-radius: 8px;
    cursor: pointer;
    color: ${colors.primary}; 
    background-color: #FFFFFF;
    box-shadow: 0px 5px 6px rgba(0,0,0,0.7); 
  }
  h2 {
    margin-left: 62px;
    font-size: 14px;
    font: ${fonts[400]};
    color: ${colors.darkGrayishBlue}
  }
`;

export const Filtros = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  > #select {
    border-radius: 8px;
    margin-left: 50px;
    /* background-color: blue; */
  }
`;

export const Buscar = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.lightGray};
  width: 30%;
  height: 45px;
  border-radius: 5px;
  /* background-color: red; */
  input {
    width: 100%;
    height: 100%;
    color: ${colors.orange};
    background-color: transparent;
    font-size: 18px;
    outline: none;
    /* background-color: blue; */
  }
  #button {
    width: 15%;
    height: 100%;
    align-items: center;
    justify-content: center;
    /* background: green; */
    cursor: pointer;
    :hover {
      color: ${colors.purple};
    }
  }
  svg {
    color: ${colors.darkGrayishBlue};
    :hover {
      color: #000;
    }
  }
`;