import styled from "styled-components";
import { breakpoint } from "../styles/BreakPoint";

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
`;

export const DogSelect = styled.select`
    padding: 11px 20px;
    border-radius: 0;
    border-right: none;
    :focus {
        outline: none;
    }
`;
export const DogOption = styled.option``;

export const DogButton = styled.button`
    padding: 13px 20px;
    background-color: black;
    color: white;
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