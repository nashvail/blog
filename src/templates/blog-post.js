import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

// Utils
import Constants from "../utils/Constants"

// Components
import Header from "../components/Header"

// Styled components
const Container = styled.main`
  width: 50%;
  display: grid;
  justify-content: center;
  /* background: red; */
  margin-left: calc((100vw - ${Constants.BODY_WIDTH["before_first_breakpoint"]})/2);

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    width: 60%;
    margin: 0 auto;
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[1]}) {
    width: 75%;
    margin: 0 auto;
  }

  
  @media screen and (max-width: ${Constants.BREAKPOINTS[2]}) {
    width: 85%;
    margin: 0 auto;
  }

`

const Main = styled.main`
  /* width: ${Constants.BODY_WIDTH["before_first_breakpoint"]}; */
  color: #121212;
  display: grid;
`

const Title = styled.h1`
  /* margin: 3rem 0 2rem 0; */
  /* text-align: center; */
  font-size: 3rem;
`

const Article = styled.article`
  margin-top: 2rem;
  p:first-child:first-letter {
    color: #903;
    float: left;
    font-weight: bolder;
    font-size: 6rem;
    line-height: 3rem;
    padding: 1.2rem 0.7rem 0.4rem 0;
  }
`

const PublishDate = styled.span`
  font-family: 'Input mono';
  /* font-weight: bold; */
  color: grey;
  display: block;
  margin-bottom: 0.5rem;
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid
  console.log(data)
  return (
    <div>
      <Header />
      <Container>
        <Main>
          <div style={{
            marginTop: "3rem",
            marginBottom: "1rem"
          }}>
          <PublishDate>August 15, 2019</PublishDate>
          <Title>{frontmatter.title}</Title>
          </div>
          <Img fluid={featuredImgFluid} />
          <Article dangerouslySetInnerHTML={{ __html: html }} />
        </Main>
      </Container>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
