import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

// Utils
import Constants from "../utils/Constants"

// Components
import Header from "../components/Header"
import FilterNav from "../components/FilterNav"
import SideCard from "../components/SideCard"
import Footer from "../components/Footer"
import RelatedArticles from "../components/RelatedArticles"
import SEO from "../components/SEO"

// Styled components
const Title = styled.h1`
  /* margin: 3rem 0 2rem 0; */
  /* text-align: center; */
  font-size: calc(2rem + 2vw);
  margin-bottom: 1rem;
`

// TODO: We'll figure this later, the issue is that it is displayed differently in mozilla and chrome
const Article = styled.article`
  & > p:first-child:first-letter {
    color: #903;
    float: left;
    font-weight: bolder;
    font-size: 3rem;
    line-height: 0.7rem;
    padding: 1.2rem 0.7rem 0.4rem 0;
  }

  blockquote p {
    color: ${Constants.COLORS.BLACK[2]};
    font-style: italic;
    font-size: 1.2rem;
  }
`

const PublishDate = styled.span`
  font-family: "Input mono";
  /* font-weight: bold; */
  color: grey;
  display: block;
  margin-bottom: 0.5rem;
`

const Container = styled.main`
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 72ch 1fr;
  grid-gap: 3rem;

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    grid-template-columns: auto;
    grid-gap: 2rem;
    width: 70%;
    max-width: 75ch;
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[1]}) {
    width: 75%;
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[2]}) {
    width: 85%;
  }
`
const Sidebar = styled.aside`
  position: relative;
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
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        keywords={frontmatter.keywords}
      />
      <Header sticky={false} />
      {/* <FilterNav /> */}
      <Container>
        <main>
          <div
            style={{
              marginTop: "3rem",
            }}
          >
            <PublishDate>{frontmatter.date}</PublishDate>
            <Title>{frontmatter.title}</Title>
          </div>
          {featuredImgFluid && (
            <div style={{ margin: "1rem 0 2rem 0" }}>
              <Img fluid={featuredImgFluid} />
            </div>
          )}
          <Article dangerouslySetInnerHTML={{ __html: html }} />
        </main>
        <Sidebar>
          <RelatedArticles />
          <SideCard
            style={{ marginTop: "2rem", marginLeft: "3rem" }}
            tweetLink={`https://twitter.com/intent/tweet/?text=${frontmatter.title}&url=https://nashvail.me${frontmatter.path}%2F&via=nashvail`}
          />
        </Sidebar>
        <Footer />
      </Container>
    </>
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
        description
        keywords
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
