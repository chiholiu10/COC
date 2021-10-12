import styled from "styled-components";
import { breakpoint } from "../styles/BreakPoint";

export const CatComponent = styled.div`
    flex: 1;
    ${breakpoint.md`
        flex: 50%;
    `}
`;

export const CatRadioSelectBlock = styled.div``;

export const CatLabel = styled.label`
    font-size: 18px;
    padding: 10px;
`;

export const CatInput = styled.input`
    margin: 5px;
`;

export const CatContent = styled.div`
    font-size: 18px;
    line-height: 1.4;
    padding: 20px;
    border: 1px solid black;
    margin-top: 20px;
`;

export const CatWeight = styled.div`
    font-weight: 600;
    line-height: 1.7;
`;

export const CatFriendly = styled.div`
    line-height: 1.7;
`;

export const CatCountryCode = styled.div`
    color: green;
    line-height: 1.7;
    text-align: right;
`;

export const CatDecription = styled.div`
    padding-top: 50px;
`;

export const CatTemperament = styled.div``;

export const CatListNoResult = styled.div``;