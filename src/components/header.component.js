import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaPhone, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"
import { graphql, useStaticQuery, Link } from "gatsby"
import { devices } from "../theme/breakpoints"
import { Text } from "../components/text.component"
import Data from "../data/menu.json";

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.globals.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  height: 100%;
`
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  border-bottom: 1px solid hsl(0, 0%, 75%);
  height: ${({ theme }) => theme.globals.headerHeight};
  padding: 0 1em;
  z-index: 1;
`
const Nav = styled.nav`
`
const LinkList = styled.ul`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  flex-direction: column;
  height: calc(100% - ${props => props.theme.globals.headerHeight});
  left: 0;
  margin: 0 auto;
  padding: 0;
  position: fixed;
  top: ${props => props.theme.globals.headerHeight};
  transition: all 0.3s ease-in-out;
  width: 100%;
  z-index: 1;
  display: ${({ isOpen }) => (isOpen ? "flex" : "flex")};
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
    >li {
      list-style: none;
      font-size: 1em;
      text-transform: uppercase;
      transition: background 0.3s ease-in-out;
      &:hover {
      }
      a {
        transition: color 0.3s ease-in-out;
        color: white;
        text-decoration: none;
      }
    }
  }
`
const GatsbyLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  padding: 1em;
  color: ${({ theme }) => theme.colors.text.primary};
`;
const LinkItem = styled.li`
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  list-style: none;

`;
const MenuButton = styled.button`
  all: unset;
  touch-action: manipulation;
  @media${devices.tablet} {
  }
`
const HamMenu = styled.div`
  margin: 0rem;
  width: 36px;
  cursor: pointer;
  &:after,
  &:before,
  div {
    background-color: ${({ theme }) => theme.colors.ui.decoration};
    content: "";
    display: block;
    height: 4px;
    border-radius: 4px;
    margin: 6px 0;
    transition: all 0.3s ease-in-out;
  }
  &:before {
    transform: ${({ isOpen }) =>
    isOpen ? ["translateY(10px)", "rotate(135deg)"] : null};
  }
  &::after {
    transform: ${({ isOpen }) =>
    isOpen ? ["translateY(-10px)", "rotate(-135deg)"] : null};
  }
  div {
    transform: ${({ isOpen }) => (isOpen ? "scale(0)" : null)};
  }
  @media ${devices.tablet} {
  }
`
const Address = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 2em;
  align-self: center;
  
`;
const AnchorLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.ui.decoration};
`;
const SocialLinksRow = styled.div`
  display: flex;
  flex: .2;
  justify-content: center;
`;
const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 60%;
`;
const LinkWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: .8;
  justify-content: space-evenly;
`;

export default function Header() {
  const data = useStaticQuery(graphql`
  query LogoBlack {
    allImageSharp(filter: {original: {src: {regex: "/nirvana-black/"}}}) {
      nodes {
        gatsbyImageData(width: 90, placeholder: NONE)
      }
    }
  }
  `);
  const image = getImage(data.allImageSharp.nodes[0]);

  const [isOpen, setIsOpen] = useState(false)

  const toggleClicked = () => {
    setIsOpen(!isOpen)
  }
  const checkIsOpen = () => {
    if (isOpen) {
      setIsOpen(!isOpen)
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      isOpen && (document.body.style.overflow = "hidden")
      !isOpen && (document.body.style.overflow = "")
    } else if (window.innerWidth > 768) {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const SOCIAL_LINK_SIZE = "32px";
  const socialLinks = {
    "whatsapp": <FaWhatsapp size={SOCIAL_LINK_SIZE} />,
    "facebook": <FaFacebook size={SOCIAL_LINK_SIZE} />,
    "phone": <FaPhone size={SOCIAL_LINK_SIZE} />,
    "instagram": <FaInstagram size={SOCIAL_LINK_SIZE} />,
  }

  return (
    <>
      <StyledHeader>
        <Wrapper>
          <Link to="/" onClick={checkIsOpen}>
            <GatsbyImage image={image} alt="logo" />
          </Link>
          <Nav>
            <LinkList isOpen={isOpen}>
              <LinkWrapper>
                <LinkItem onClick={toggleClicked}>
                  <Text variant="title">
                    <GatsbyLink to="/">
                      Menú
                    </GatsbyLink>
                  </Text>
                </LinkItem>
                <LinkItem onClick={toggleClicked}>
                  <Text variant="title">
                    <GatsbyLink to="/orderlist">
                      Lista de Órdenes
                    </GatsbyLink>
                  </Text>
                </LinkItem>
              </LinkWrapper>
              <SocialLinksRow>
                <SocialWrapper>
                  {Data.Social.map(({ name, link }) => {
                    return (
                      <AnchorLink href={link} target="_blank" rel="noreferrer" key={`link-${name}`}>
                        {socialLinks[name]}
                      </AnchorLink>
                    )
                  })}
                </SocialWrapper>
              </SocialLinksRow>
              <Address>
                <Text variant="caption">{Data.Informacion.Dirección}</Text>
              </Address>
            </LinkList>
          </Nav>
          <MenuButton onClick={toggleClicked} aria-label="Navigation Button">
            <HamMenu isOpen={isOpen}>
              <div></div>
            </HamMenu>
          </MenuButton>
        </Wrapper>
      </StyledHeader>
    </>
  )
}
