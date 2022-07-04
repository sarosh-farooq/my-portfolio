import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import './BlogDetail.module.css'


const BlogDetail = ({ data }) => {

    const { html } = data.markdownRemark
    const { title, metaDescription, date, category, image } = data.markdownRemark.frontmatter

    return (
        <Container sx={{mb:2}}>

            <Box>
                <Img fluid={image.childImageSharp.fluid} />
                <Typography variant="h1" sx={{textDecoration: 'underline', my:2, fontSize: {xs: '16px', sm: '18px', md: '20px'}}}>{title}</Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my:2 }}>
                    <Typography variant="body1">{date}</Typography>
                    <Typography variant="body1" color="primary" sx={{ fontWeight: 600 }}>{category}</Typography>
                </Box>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                
            </Box>
        </Container>
    )
}

export default BlogDetail

export const query = graphql`
query blog($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        category
        date(fromNow: true)
        image {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
        metaDescription
        slug
        title
      }
    }
  }
`