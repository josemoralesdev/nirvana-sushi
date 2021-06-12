import React from 'react'
import { Footer } from "./footer.component"
import { Section } from "./section.component"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { GlobalStyle } from "../theme/globalStyles"
import Header from './header.component'

export const Layout = ({ children }) => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyle />
        <Section>
          {children}
        </Section>
        <Footer />
      </ThemeProvider>
    </>
  );
}