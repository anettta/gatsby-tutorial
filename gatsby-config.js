/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'Gatsby Tutorial',
    description: "learning gatsby",
    author: "anetta",
    data:["item1", "item2"],
    person: {name: "anna", age: 30},
  },
  plugins: ['gatsby-plugin-styled-components'],
}
