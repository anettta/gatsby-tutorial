import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
{
  site {
    info:siteMetadata {
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

const Header = () => {
     //run ONLY inside the function
     const {site:{info:{person:{name}}}} = useStaticQuery(getData);


    return (
        <div>

            {/* <h1>name: {data.site.siteMetadata.person.name}</h1> */} 
            <h1>name: {name}</h1>

        </div>
    )
}

export default Header
