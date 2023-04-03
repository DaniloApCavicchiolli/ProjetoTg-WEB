import styled from "styled-components";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${colors.lightGray};
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.lightGray};
  width: 100%;
  height: 100px;
  #icon {
    width: 55px;
    height: 45px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: ${colors.dark};
  }
  button {
    background: transparent;
    cursor: pointer;
    margin-right: 20px;
    :hover {
      color: ${colors.purple};
    }
  }
   /* #button {
      width: 55px;
      height: 45px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      cursor: pointer;
      margin-right: 100px;
      color: ${colors.primary};
    } */
`;

export const NamePage = styled.div`
  width: 20%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-left: 45px;
  b {
    margin-left: 20px;
    font-size: 25px;
    ${fonts[700]};
    color: ${colors.dark};
  }
`;

export const Cards = styled.div`
  width: 95%;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.lightGray};
  div {
    width: 250px;
    height: 86px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    cursor: pointer;
    span {
      color: #FFFFFF;
      margin-left: 28px;
      margin-bottom: 15px;
      ${fonts[400]};
    }
    p {
      color: #FFFFFF;
      ${fonts[700]};
    }
    > div {
      width: 80%;
      height: 20%;
      margin-left: 32px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      /* background-color: yellow; */
    }
  }
`;

export const Buscar = styled.div`
  display: flex;
  background-color: #fff;
  width: 35%;
  height: 45px;
  align-items: center;
  padding-left: 10px;
  border-radius: 5px;
  margin-right: 100px;
  input {
    color: ${colors.darkGrayishBlue};
    background-color: transparent;
    font-size: 18px;
    height: 40px;
    outline: none;
  }
  svg {
    color: ${colors.darkGrayishBlue};
    :hover {
      color: #000;
    }
  }
`;