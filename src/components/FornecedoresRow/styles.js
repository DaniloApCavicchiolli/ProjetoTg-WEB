import styled from "styled-components";
import colors from "../../../src/styles/colors";
import fonts from "../../../src/styles/fonts";

export const Container = styled.div`
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-left: 4px solid ${colors.primary}; 
    margin-bottom: 35px;
    margin-top: 44px;
    margin-left: 92px;
    margin-right: 31px;
    border-radius: 4px; 
    /* background-color: red;  */
    :hover {
      background-color: rgb(32, 101, 95, 0.1);
    }
    img {
        width: 50px;
        margin-bottom: -7px;
        border-radius: 12px;
        /* background-color: blue; */
    }
    header {
        flex: 1;
        margin-left: 10px;
        text-align: left;
        width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    p {
        color: ${colors.primary};
        font: ${fonts[700]};
        font-size: 15px;
    }
    span {
        color: ${colors.darkGrayishBlue};
        font: ${fonts[400]};
        font-size: 13px;
    }
`;

export const Body = styled.div`
    flex: 1;
    align-items: center;
    justify-content: center;
    /* background-color: gray;   */
`;

export const Buttons = styled.div`
    flex:1;
    display: flex; 
    justify-content: space-around;
    /* background-color: blue; */
    button {
        background: transparent;
        cursor: pointer;
    }    
`;