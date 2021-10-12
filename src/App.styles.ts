import styled from "styled-components";
import { breakpoint } from "./styles/BreakPoint";
import theme from "./styles/Theme";

export const AppComponent = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: ${theme.fontWeights.regular};
    padding: 20px;
    ${breakpoint.md`
        flex-direction: row;
    `}
`;

