import styled from "styled-components";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  background: ${(props) =>
    props.isActive ? "rgb(32, 101, 95, 0.1)" : "transparent"};
  border-right: ${(props) => props.isActive && `5px solid ${colors.primary}`};
  color: ${(props) =>
    props.isActive ? `${colors.primary}` : ` ${colors.darkGrayishBlue}`};
  font-size: 16px;
  width: 250px;
  height: 50px;
  padding-left: ${(props) => (props.isActive ? "20px" : "20px")};
  :hover {
    background: rgb(32, 101, 95, 0.1);
    border-right: 5px solid ${colors.primary};
    color: ${colors.primary};
    padding-left: 25px;
  }
  span {
  }
  svg {
    stroke-width: 0;
    height: 25;
    width: 25;
    color: ${colors.darKGray}
  }
  ${fonts[700]};
`;