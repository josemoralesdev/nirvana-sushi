import styled from "styled-components";

const defaultTextStyles = (theme) => `
 font-weight: ${theme.fontWeights.regular};
 color: ${theme.colors.text.primary};
 margin-top: 0px;
 margin-bottom: 0px;
`;

const title = (theme) => `
font-family: ${theme.fonts.title};
 font-weight: ${theme.fontWeights.regular};
 color: ${theme.colors.text.primary};
 font-size: ${theme.fontSizes.title};
 margin-top: 16px;
 margin-bottom: 16px;
`;

const subtitle = (theme) => `
  font-size: ${theme.fontSizes.subtitle};
  font-family: ${theme.fonts.title};
  font-weight: ${theme.fontWeights.regular};
 margin-top: 16px;
 margin-bottom: 16px;
`;

const body = (theme) => `
 font-family: ${theme.fonts.body};
 font-weight: ${theme.fontWeights.regular};
 font-size: ${theme.fontSizes.body};
 line-height: 1.8em;
 margin-top: 8px;
 margin-bottom: 8px;
`;

const highlight = (theme) => `
 font-family: ${theme.fonts.highlight};
 font-weight: ${theme.fontWeights.regular};
 font-size: ${theme.fontSizes.highlight};
`;

const numbers = (theme) => `
 font-family: ${theme.fonts.numbers};
 font-weight: ${theme.fontWeights.regular};
 font-size: ${theme.fontSizes.numbers};
`;
const footer = (theme) => `
 font-family: ${theme.fonts.footer};
 font-weight: ${theme.fontWeights.regular};
 font-size: ${theme.fontSizes.footer};
`;
const button = (theme) => `
font-family: ${theme.fonts.button};
 font-size: ${theme.fontSizes.button};
`;
const caption = (theme) => `
font-family: ${theme.fonts.title};
 font-weight: ${theme.fontWeights.regular};
 color: ${theme.colors.text.primary};
 font-size: ${theme.fontSizes.caption};
`;

const variants = {
  title,
  subtitle,
  highlight,
  numbers,
  caption,
  body,
  button,
  footer,
};

export const Text = styled.p`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)};
`;

Text.defaultProps = {
  variant: "body",
};
export default Text;