import 'styled-components';

type ObjectOfStrings = Record<string | number, any>;

interface Breakpoints extends Array<number> {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Breakpoints;
  }
}