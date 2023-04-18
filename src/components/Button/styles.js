import styled from "styled-components";
import { shade } from "polished";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.button`
    background-color: ${({ backgroundColor }) => backgroundColor ?? `${colors.primary}`};
    height: 56px;
    /* border-radius: 10px; */
    border-radius: ${({ borderRadius }) => borderRadius ?? '10px'};
    padding: 0 16px;
    color: ${({ color }) => color ?? '#fff'};
    width: 100%;
    font-family: ${({ fontFamily }) => fontFamily ?? fonts[700]};
    /* text-transform: ${({ textTransform }) => textTransform ?? 'lowercase'}; */
    margin-top: 27px;
    transition: background-color 0.3s;
    border: 0;
    cursor: pointer;
    ${({ shouldHover }) => shouldHover
        ?
        `&:hover {  
            background-color: rgb(122, 145, 134, 0.1); 
            color: ${colors.secondary}; 
            border-right: 5px solid ${colors.secondary};
        }`
        :
        `&:hover {  
            background-color: ${shade(0.1, `${colors.primary}`)}
        }`

    }
`;