import styled from "styled-components";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const Container = styled.div`
  align-self: center;
  width: 95%;
  height: 78%;
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

export const Header = styled.div`
  padding-top: 59px;
  /* background-color: yellow; */
  div {
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    /* background-color: blue;  */
  }
  p {
    display: flex;
    width: 90px;
    height: 35px;
    align-items: center;
    justify-content: space-around;
    font-size: 15px;
    font: ${fonts[700]};
    color: #FFF;
    margin-left: 62px;
    border-radius: 8px; 
    background-color: ${colors.primary};  
  }
`;

export const Head = styled.div`
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

export const Filtro = styled.div` 
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 150px;
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
`;

export const Content = styled.div`
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
    margin-left: 92px;
    margin-right: 31px;
    border-radius: 4px; 
    /* background-color: yellow;  */
    header {
        flex: 1;
        display: flex;
        /* background-color: #7F63F4; */
        p {
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${colors.darkGrayishBlue};
            font: ${fonts[700]};
            font-size: 15px;
            cursor: pointer;
        }
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
        cursor: pointer;
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
