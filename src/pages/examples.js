import React from 'react'
import Header from '../examples/header'
import Layout from '../components/layout'
import HeaderStatic from '../examples/headerStatic'
import { graphql } from 'gatsby' 


const examples = ({data}) => {
    const {
        site: { //destructiring
            info: {author},
        },
    } = data
    return (
        <Layout>
            <p>examples</p>
            <Header />
            <HeaderStatic />
    <h5>author: {author}</h5>

        </Layout>
    )
}
//PageQuery
export const data = graphql` 
  {
    site {
      info: siteMetadata {
        author
        description
        data
        person {
          name
          age
        }
      }
    }
  }
`

export default examples
