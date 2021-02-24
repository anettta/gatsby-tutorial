/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require('dotenv').config({
   path: `.env.${process.env.NODE_ENV}`,
 })

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'Gatsby Tutorial',
    description: "learning gatsby",
    author: "anetta",
    data:["item1", "item2"],
    person: {name: "anna", age: 30},
  },
  plugins: ['gatsby-plugin-styled-components',
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: 'gatsby-source-filesystem', // I can have different folders pointing to specific folder
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
    
  },
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: `1b8w4htm1go9`,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },
],
}

