import React from 'react'
import styled from "styled-components"
import { devices } from '../theme/breakpoints';

export const SectionStyled = styled.section`
  margin-top: ${({ theme }) => `calc(${theme.globals.headerHeight} + 25px)`};
  min-height: 80vh;
  max-width: ${({ theme }) => theme.globals.maxWidth};
  margin-left:  1em;
  margin-right:  1em;
  @media ${devices.tablet}{
    margin-left: 1em;
    margin-right: 1em;
  }
  @media ${devices.desktop}{
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Section = ({ children }) => <SectionStyled>{children}</SectionStyled>