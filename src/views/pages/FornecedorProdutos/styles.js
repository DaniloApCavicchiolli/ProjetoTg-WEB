import styled from "styled-components";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const Container = styled.div`
  align-self: center;
  width: 95%;
  height: 85%;
  /* height: 820px; */
  margin-top: 20px;
  border-spacing: 0px 10px;
  border-radius: 12px;
  ${fonts[700]};
  color: ${colors.darKGray};
  background: #fff;
  text-align: center;
  
`;

export const Content = styled.div`
    /* background-color: yellowgreen;  */
margin-top: 30px;
  div {
    display: flex;
    align-items: center; 
    justify-content: space-between; 
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

export const Tabela = styled.div` 
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

export const Buscar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.lightGray};
  width: 30%;
  height: 45px;
  border-radius: 5px;
  margin-right: 150px;
  /* background-color: red; */
  input {
    width: 100%;
    height: 100%;
    margin-left: 10px;
    color: ${colors.darkGrayishBlue};
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
