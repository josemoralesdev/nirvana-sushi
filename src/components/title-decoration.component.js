import React from "react"
import styled from "styled-components"

const DecorationSpan = styled.span`
  background-color: ${props => props.theme.colors.ui.decoration};
  width: 100%;
  color: white;
  padding: 0.175em 0.225em;
`;
export const Decoration = ({ children }) => {
  return (
    <DecorationSpan>
      {children}
    </DecorationSpan>
  );
}