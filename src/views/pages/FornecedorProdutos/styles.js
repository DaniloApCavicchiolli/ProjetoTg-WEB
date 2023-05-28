import styled from "styled-components";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const Container = styled.div`
  align-self: center;
  width: 95%;
  height: 80%;
  margin-top: 20px;
  border-spacing: 0px 10px;
  border-radius: 12px;
  ${fonts[700]};
  color: ${colors.darKGray};
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
  padding-top: 30px;
  /* background-color: yellow; */
  div {
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    /* background-color: blue;  */
  }
  h1 {
    font-size: 24px;
    font: ${fonts[700]};
    color: ${colors.dark};
    margin-left: 62px; 
  }
  p {
    margin-left: 62px;
    font-size: 14px;
    font: ${fonts[400]};
    color: ${colors.darkGrayishBlue}
  }
  button {
    width: 140px;
    height: 40px;
    font-size: 15px;
    font: ${fonts[400]}; 
    margin-right: 80px; 
    border-radius: 8px;
    color: #FFF;
    background-color: ${colors.secondary};
    box-shadow: 0px 5px 6px rgba(0,0,0,0.7); 
  }
`;

export const ContainerButtons = styled.div` 
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 12px;
  margin-right: 40px;
  /* background-color: #EFF1F9; */
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #EFF1F9;
    /* background-color: yellow; */
  }
   #p {
    width: 150px;
    height: 45px;
    font-size: 15px;
    font: ${fonts[400]};
    color: ${(color) => color ?? `${colors.darkGrayishBlue}`};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
     /* background-color: yellow;  */
  }
`;
export const Filtros = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* background-color: blue; */
  > p {
    width: 140px;
    height: 35px;
    font-size: 12px;
    font: ${fonts[400]};
    color: ${colors.darkGrayishBlue};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    background-color: #FFFFFF;
    box-shadow:0px 5px 6px rgba(0,0,0,0.6);
  }
  > #select {
    border-radius: 8px;
    margin-left: 50px;
    /* background-color: blue; */
  }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */
    margin-right: 50px;
     div {
        width: 20px;
        height: 20px;
        border: 2px solid #000;
        cursor: pointer;
        /* background-color: yellow; */
    }    
`;

export const Body = styled.div`
    flex: 1;
    align-items: center;
    justify-content: center;
    /* background-color: gray;   */
    p {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colors.darkGrayishBlue};
        font: ${fonts[700]};
        font-size: 15px;
    }
`;

export const Buscar = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.lightGray};
  /* box-shadow: 0px 5px 6px rgba(0,0,0,0.6); */
  width: 30%;
  height: 45px;
  border-radius: 8px;
  /* background-color: red; */
  input {
    width: 100%;
    height: 100%;
    color: ${colors.dark};
    background-color: transparent;
    font-size: 18px;
    outline: none;
    /* background-color: blue; */
  }
  #button {
    width: 15%;
    height: 100%;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background: ${colors.secondaryRGB};
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
