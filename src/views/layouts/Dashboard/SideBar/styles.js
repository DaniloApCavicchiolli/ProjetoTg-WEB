// import { Form } from "@unform/web";
import styled from "styled-components";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";
import imageLogo from "../../../../assets/logo1.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`;

export const ContainerSide = styled.div`
  height: 100vh;
  background-color: #fff;

  width: ${(props) => (props.isMobile ? "60px" : "250px")};
  display: flex;
  transition: width 0.5s;
  @media(max-width: 429px) {
    width: 60px;
    overflow: hidden;
  }

  @media(min-width: 429px) {
    width: 250px;
  }


  flex-direction: column;
  /* h4 {
    font-size: 12px;
    margin-top: 40px;
    color: ${colors.extraLightGray};
    ${fonts[700]};
    margin-left: 30px;
  } */
`;

export const Menu = styled.div`
  /* margin-top: 10px; */
  /* background-color: yellow; */
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  /* background-color: #7F63F4; */
  background-image: url(${imageLogo});
  background-size: contain;
  background-repeat: no-repeat;
  margin: 20px;
  transition: all 1s;
  @media(max-width: 429px) {
    height: 10px;
    opacity: 0;
  }
`;