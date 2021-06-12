import React from 'react'
import { Link } from "gatsby";
import styled from "styled-components"
import Text from './text.component';

const Back = styled.button`
  all: unset;
  display: ${({ isCentered }) => isCentered ? "block" : null};
  margin: ${({ isCentered }) => isCentered ? "0 auto" : null};
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.button};
`;

export const BackButton = ({ isCentered = false }) => {
  return (
    <Back isCentered>
      <StyledLink to="/">
        <Text variant="button">
          ATRAS
         </Text>
      </StyledLink>
    </Back>
  )
}