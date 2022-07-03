import React from "react";
import { graphql } from "gatsby";
import { Container } from "@mui/material";
import Intro from "../components/Introduction/Intro";
import About from "../components/About/About";
import Service from "../components/Service/Service";
import Skills from "../components/Skills/Skills"
import Portfolio from "../components/Portfolio/Portfolio";
import Projects from "../components/Projects/Projects";
import Feedback from "../components/Feedback/Feedback"
import Blogs from "../components/Blogs/Blogs";
import Contact from "../components/Contact/Contact";


const IndexPage = ({ data }) => {

  return (
    <Container>
      <Intro />
      <About />
      <Service />
      <Skills />
      <Portfolio />
      <Projects />
      <Feedback />
      <Blogs blogList={data.allMarkdownRemark.nodes} />
      <Contact />
    </Container>
  );
};

export default IndexPage;


export const query = graphql`
query Blogs {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
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
}
`