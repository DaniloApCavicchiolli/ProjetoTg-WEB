import styled from "styled-components";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const Container = styled.div`
  align-self: center;
  width: 95%;
  /* height: 820px; */
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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  /* background-color: yellow; */
  div {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    /* background-color: yellow;  */
  }
  h1 {
    font-size: 24px;
    font: ${fonts[700]};
    color: ${colors.dark};
    margin-left: 62px; 
  }
  button {
    width: 40px;
    height: 40px;
    font-size: 32px; 
    margin-right: 80px; 
    border-radius: 8px;
    cursor: pointer;
    color: ${colors.primary}; 
    background-color: #FFFFFF;
    box-shadow: 0px 5px 6px rgba(0,0,0,0.7); 
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  > div {
    width: 100%;
    /* background-color: yellow; */
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
