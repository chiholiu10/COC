import styled from "styled-components";
import { breakpoint } from "./styles/BreakPoint";

export const AppComponent = styled.div`
    display: flex;
    flex-direction: column;
    ${breakpoint.md`
        flex-direction: row;
    `}
`;

