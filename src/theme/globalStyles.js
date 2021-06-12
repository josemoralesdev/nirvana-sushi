import { createGlobalStyle } from "styled-components";
import { devices } from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body{
    background-color: ${({ theme }) => theme.colors.bg.primary};
    font-size: 13px;
    margin: 0;
    @media ${devices.mobileM}{
      font-size: 14px;
    }
  }
`;