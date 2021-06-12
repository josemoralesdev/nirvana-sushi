import React from 'react'
import styled from "styled-components"
import Text from "../components/text.component";

const FooterStyled = styled.footer`
  width: 100%;
  padding: 2em 0 1em;
`;
const Copyright = styled.div`
  text-align: center;
`;
export const Footer = () => {

  return (
    <>
      <FooterStyled>
        <Copyright>
          <Text variant="footer">
            {`${new Date().getFullYear()} © Nirvana Sushi`}
          </Text>
        </Copyright>
      </FooterStyled>
    </>
  )
}
