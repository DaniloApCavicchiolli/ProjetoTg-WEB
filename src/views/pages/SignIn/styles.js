import styled from "styled-components";
import Background from "../../../assets/signinbackground.jpg";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";
import { Form } from "@unform/web";

export const Container = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 600px;
    width: 450px;
    background: #fff;
    border-radius: 30px;
    h1 {
        color: ${colors.dark};
        /* ${fonts[700]}; */
        font-size: 40px;
        margin: 0px 50px;
        margin-top: 47px;
    }
    > span {
        color: ${colors.extraLightGray};
        /* ${fonts[400]}; */
        font-size: 20px;
        margin: 0px 30px 45px 50px; 
    }
    > div {
        display: flex;
        /* ${fonts[400]}; */
        font-size: 18px;
        margin: 0px 65px;
        margin-top: 27px;
        font-weight: 400;
        > a {
            margin-left: 10px;
            color: #4040ff;
        }
  }
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

export const Forms = styled(Form)`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-self: center;
   > div {
    margin-top: 12px;
    margin-bottom: 12px;
    padding-left: 36px;  
    border-radius: 8px;
    box-shadow: 0px 5px 6px rgba(0,0,0,0.2);
    > span {
    display: flex;
    margin-bottom: 12px;
    color: ${colors.darKGray};
    /* ${fonts[400]}; */
    }
    svg {
      color: ${colors.darkGrayishBlue}
    }
  }
  
`;