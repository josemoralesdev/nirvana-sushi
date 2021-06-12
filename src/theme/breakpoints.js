export const breakpoints = {
  mobileSm: `320px`,
  mobileM: `375px`,
  mobileL: `425px`,
  tablet: `768px`,
  desktop: `1024px`,
  desktopL: `1440px`,
}

export const devices = {
  mobileSm: `(min-width: ${breakpoints.mobileSm})`,
  mobileM: `(min-width: ${breakpoints.mobileM})`,
  mobileL: `(min-width: ${breakpoints.mobileL})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  desktopL: `(min-width: ${breakpoints.desktopL})`,
}