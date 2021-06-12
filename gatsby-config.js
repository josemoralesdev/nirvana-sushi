module.exports = {
  pathPrefix: "/nirvana-sushi",
  siteMetadata: {
    title: "Nirvana Sushi",
    siteUrl: `https://josemoralesdev.github.io/nirvana-sushi/`,
    url: `https://josemoralesdev.github.io/nirvana-sushi`,
    description: `Menú digital de Nirvana Sushi`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `./src/data`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "logo",
        path: `./src/assets/logo/`
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://josemoralesdev.github.io/nirvana-sushi',
        sitemap: 'https://josemoralesdev.github.io/nirvana-sushi/sitemap.xml',
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    }
  ],
};
