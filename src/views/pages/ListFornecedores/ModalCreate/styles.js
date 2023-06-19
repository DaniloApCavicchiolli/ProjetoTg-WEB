import { Form } from "@unform/web";
import styled from "styled-components";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";
import imageLogo from "../../../../assets/icon.png";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgb(122, 145, 134, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 998;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 800px;
  height: 630px;
  border-radius: 30px;
  padding-bottom: 30px;
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
  }
  h1 {
    ${fonts[700]};
    color: ${colors.dark};
    margin-top: 50px;
  }
  > p {
    ${fonts[400]};
    color: ${colors.darkGrayishBlue};
    margin-bottom: 50px;
  }
  a {
    text-decoration: none;
    margin-top: 20px;
    font-size: 18px;
    ${fonts[700]};
    color: ${colors.dark};
    :hover {
      color: ${colors.secondary};
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

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Column = styled.div`
  > div {
    width: 300px;
    height: 76px;
    margin-bottom: 26px;
    padding-left: 36px;  
    border-radius: 8px;
    box-shadow: 0px 5px 6px rgba(0,0,0,0.2);
     span {
      ${fonts[400]};
      color: ${colors.textLabel};
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
  flex-direction: column;
  align-self: center;
  /* background-color: yellow; */
  #button {
      align-items: center;
      display: flex;
      flex-direction: column;
    }   
`;

export const Image = styled.div`
  width: 70px;
  height: 77px;
  margin-top: 30px;
  /* background-color: #7F63F4; */
  background-image: url(${imageLogo});
  background-size: contain;
  background-repeat: no-repeat;
`;