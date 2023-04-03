import styled from "styled-components";
import colors from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: ${colors.lightGray};
  height: 100%;
  min-height: 100vh;
  /* padding-bottom: 20px; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  /* background-color: yellow; */
`;