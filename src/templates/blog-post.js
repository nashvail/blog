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
  max-width: 800px;
  justify-content: center;
  margin-left: calc(
    (100vw - ${Constants.BODY_WIDTH["before_first_breakpoint"]}) / 2
  );

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
  font-size: 3.5rem;
`

// We'll figure this later, the issue is that it is displayed differently in mozilla and chrome
const Article = styled.article`
  p:first-child:first-letter {
    /* float: left;
    font-weight: bolder;
    font-size: 5rem;
    line-height: 1.5rem; */
  }
`

const PublishDate = styled.span`
  font-family: "Input mono";
  /* font-weight: bold; */
  color: grey;
  display: block;
  margin-bottom: 0.5rem;
`

const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    flex-direction: column;
  }
`

const RightContainer = styled.div`
  width: 350px;
  height: 500px;
  position: sticky;
  top: 8rem;
  background: #273339;
  margin-left: 3rem;
  /* border-radius: 8px; */

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    margin: 3rem auto 3rem auto;
    width: 50%;
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  let featuredImgFluid
  if (frontmatter.featuredImage)
    featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid
  return (
    <div>
      <Header />
      <Wrapper>
        <Container>
          <Main>
            <div
              style={{
                marginTop: "3rem",
              }}
            >
              <PublishDate>August 15, 2019</PublishDate>
              <Title>{frontmatter.title}</Title>
            </div>
            {featuredImgFluid && 
              <div style={{ margin: "1rem 0 2rem 0" }}>
                <Img fluid={featuredImgFluid} />
              </div>
            }
            <Article dangerouslySetInnerHTML={{ __html: html }} />
          </Main>
        </Container>
        <RightContainer />
      </Wrapper>
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