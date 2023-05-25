import styled from "styled-components";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const Container = styled.div`
  align-self: center;
  width: 95%;
  height: 100%;
  /* min-height: 100vh; */
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

export const Header = styled.div`
  padding-top: 59px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between; 
    /* background-color: yellow;  */
  }
  h1 {
    font-size: 24px;
    font: ${fonts[700]};
    color: ${colors.dark};
    margin-left: 62px; 
  }
`;

export const Content = styled.div`
    margin-bottom: 10px;
    /* background-color: ${colors.error}; */
/* margin-top: 10px; */
   > #soma {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;  
  }
  > div {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    /* background-color: ${colors.error}; */
  }
  h1 {
    display: flex;
    font-size: 24px;
    font: ${fonts[700]};
    color: ${colors.dark};
  }
`;

export const Filtros = styled.div` 
display: flex;
margin-top: 10px;
> #select {
  border-radius: 8px;
  margin-left: 50px;
}
> #botao {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 35px;
  border-radius: 8px;
  margin-left: 50px;
  P {
    font: ${fonts[700]};
    color: ${colors.placeHolder};
    font-size: 12px;
  }
}
`;