import styled, { css } from "styled-components";
import colors from "../../styles/colors";
import Tooltip from "../Tooltip";

export const Container = styled.div`
  margin-bottom: 16px;
  width: 90%;
  color: #f4ede8;
  background-color: ${({ backColor }) => backColor ?? '#FFF'};
  transition: all 0.3s;
  display: flex;
  align-items: center;
  border-radius: 2px;
  height: 16px;
  & + div {
    margin-top: 8px;
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      border-bottom-width: 1.8px;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #0c359c;
    `}
  ${(props) =>
    props.isFielled &&
    css`
      border-color: #ff7d00;
    `}
    ${(props) =>
    props.isSize &&
    css`
      height: ${props.isSize};
    `}
  input {
    background: transparent;
    border: 0;
    flex: 1;
    color: ${colors.blue};
    outline: none;
    height: 45px;
    font-size: 15px;
    padding-left: 15px;
    ${(props) =>
    props.isSize &&
    css`
        height: 35px;
      `}
    &::placeholder {
      color: ${colors.extraLightGray};
    }
  }
  svg {
    background: transparent;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff !important;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`