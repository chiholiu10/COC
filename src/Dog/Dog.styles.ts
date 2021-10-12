import styled from "styled-components";
import { breakpoint } from "../styles/BreakPoint";
import theme from "../styles/Theme";

export const DogComponent = styled.div`
    height: 400px;
    ${breakpoint.md`
        flex: 50%;
    `}
`;

export const DogSelectComponent = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DogResult = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`;

export const DogSelect = styled.select`
    background-color: ${theme.colors.white};
    border-radius: .25rem;
    border: .0625rem solid ${theme.colors.black};
    color: ${theme.colors.textColor};
    font-size: 1.125rem;
    height: 3.5rem;
    padding: 0 2.5rem 0 1.5rem;
    transition: box-shadow .3s;
    :focus {
        outline: none;
    }
`;
export const DogOption = styled.option``;

export const DogButton = styled.button`
    padding: 13px 20px;
    background-color: ${theme.colors.purple};
    box-shadow: 0 4px 6px hsl(0deg 0% 75% / 20%), 0 1px 3px hsl(0deg 0% 75% / 20%);
    color: white;
    font-size: 18px;
    font-weight: 500;
    border-radius: .25rem;
    border: none;
    @media (hover: hover) and (pointer: fine) {
        cursor: pointer;
    }
`;

export const DogContent = styled.div``;

export const DogImage = styled.img`
    padding-top: 50px;
    height: 200px;
`;

export const DogNoResult = styled.div``;