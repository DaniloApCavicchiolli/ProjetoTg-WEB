import { Form } from "@unform/web";
import styled from "styled-components";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const Container = styled.div`
  background: ${colors.white};
  width: 95%;
  height: 100%;
  align-self: center;
  /* margin: 30px 0px; */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
  h1 {
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 25px;
    ${fonts[700]};
    color: ${colors.dark};
  }
  span {
    margin-bottom: 20px;
    font-size: 12px;
    ${fonts[400]};
    color: ${colors.darkGrayishBlue};
  }
  /* overflow: auto; */
  /* -ms-overflow-style: none;
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
  } */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: 'yellow';
`;

export const Column = styled.div`
  > div {
    width: 300px;
    height: 76px;
    margin-bottom: 26px;
    padding-left: 36px;  
    border-radius: 8px;
    /* border: 1px solid black; */
    box-shadow: 0px 5px 6px rgba(0,0,0,0.2);
     span {
      ${fonts[400]};
      color: ${colors.dark};
      display: flex;
      margin-top: 10px;
      margin-bottom: 10px;
      /* background-color: blue; */
    }
    svg {
      color: ${colors.darkGrayishBlue}
    }
    /* background-color: yellow;    */
  } 
`;

export const Forms = styled(Form)`
  display: flex;
  width: 90%;
  margin-top: 10px;
  margin-bottom: 20px;
  flex-direction: column;
  align-self: center;
  /* background-color: yellow; */
     span {
    display: flex;
    margin-bottom: 12px;
    color: ${colors.darkGrayishBlue};
    ${fonts[400]};
    /* background-color: blue; */
    }
    #button {
      align-items: center;
      display: flex;
      flex-direction: column;
    }  
`;