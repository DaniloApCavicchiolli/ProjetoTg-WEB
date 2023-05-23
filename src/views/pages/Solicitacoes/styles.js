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
  padding-top: 59px;
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
    width: 50px;
    height: 35px;
    font-size: 32px; 
    margin-right: 50px; 
    border-radius: 8px;
    cursor: pointer;
    color: ${colors.primary}; 
    background-color: #FFFFFF;
    box-shadow: 0px 5px 6px rgba(0,0,0,0.7); 
  }
`;

export const Filtro = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 210px;
  margin-top: 15px;
  border-radius: 8px;
  background-color: #EFF1F9;
  > #p {
    width: 85px;
    height: 35px;
    font-size: 12px;
    font: ${fonts[400]};
    color: ${(color) => color ?? `${colors.darkGrayishBlue}`};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    /* background-color: ${(backgroundColor) => backgroundColor ?? `${colors.background}`} */
    /* background-color: #EFF1F9; */
    /* box-shadow:0px 5px 6px rgba(0,0,0,0.6); */
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
  width: 30%;
  height: 45px;
  border-radius: 5px;
  margin-right: 150px;
  /* background-color: red; */
  input {
    width: 100%;
    height: 100%;
    color: ${colors.darkGrayishBlue};
    background-color: transparent;
    font-size: 18px;
    outline: none;
    /* background-color: blue; */
  }
  > #button {
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
