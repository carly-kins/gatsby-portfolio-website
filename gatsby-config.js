/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `carly-portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require("sass"),
        sassOptions: {
          quietDeps: true,
          silenceDeprecations: [
             "import" //https://www.reddit.com/r/bootstrap/comments/1e6i6qg/how_you_guys_are_dealing_with_sass_deprecation/?rdt=52488
          ],
        },
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ object }) => object.typeName || "JsonFiles"
      },
    },
  ]
};