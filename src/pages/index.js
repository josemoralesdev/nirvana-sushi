import React from "react"
import Data from "../data/menu.json"
import { Link } from "gatsby"
import styled from "styled-components"
import { Decoration } from "../components/title-decoration.component"
import Text from "../components/text.component"

const HomeWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
`;
const HomeLink = styled(Link)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.title};
  display: block;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 1rem;
`;
const IndexPage = () => {

  const RenderLinks = () => {
    return (
      Data.Links.map((link) => {
        const splittedLink = link.nombre.toUpperCase().split(" ");
        return (
          splittedLink.length < 2
            ? (
              <HomeLink key={link.nombre} to={link.path}>
                <Text variant="title">
                  <Decoration>
                    {splittedLink[0]}
                  </Decoration>
                </Text>
              </HomeLink>
            )
            : (
              <HomeLink key={link.nombre} to={link.path}>
                <Text variant="title">
                  {`${splittedLink[0]} `}
                  <Decoration>{splittedLink[1]}</Decoration>
                </Text>
              </HomeLink>
            )
        )
      })
    )
  };


  return (
    <>
      <HomeWrapper>
        <Text variant="title">~ MENU ~</Text>
        {RenderLinks()}
      </HomeWrapper>
    </>
  )
}

export default IndexPage
