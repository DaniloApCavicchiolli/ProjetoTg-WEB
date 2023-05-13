import styled from "styled-components";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const Container = styled.div`
    height: 60px;
    /* width: 50%; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-left: 4px solid ${colors.primary}; 
    margin-bottom: 35px;
    margin-top: 15px;
    margin-left: 92px;
    /* margin-right: 31px; */
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
        text-align: left;
        margin-left: 10px;
        width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /* background-color: red; */
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
        /* background-color: yellow; */
    }
`;

export const Body = styled.div`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-right: 10%;
    /* background-color: gray;   */
    button {
        width: 60%;
        height: 30px;
        border-radius: 8px;        
        font: ${fonts[400]};
        color: #07A04A;
        cursor: pointer;
        background-color: rgb(7, 160, 74, 0.2);
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */
    margin-right: 10%;
     div {
        width: 20px;
        height: 20px;
        border: 2px solid #000;
        cursor: pointer;
        /* background-color: yellow; */
    }    
`;