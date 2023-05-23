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
  width: 30%;
  height: 45px;
  border-radius: 5px;
  margin-right: 150px;
  /* background-color: red; */
  input {
    width: 100%;
    height: 100%;
    margin-left: 15px;
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
