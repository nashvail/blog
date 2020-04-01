import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Constants
import Constants from "../../../utils/Constants"

// Components
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import ArticleContent from "./article-content"

// CSS
import s_ from "./styles.module.css"

// Widths
const BODY_WIDTH = {
  before_first_breakpoint: "1250px",
}

const Container = styled.main`
  margin: 0 auto;
  /* background: green; */
  width: ${BODY_WIDTH["before_first_breakpoint"]};
`

const HeroContainer = styled.section`
  margin-top: 4rem;
  grid-column: 1 / 13;
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroImageQueryCreativity1 {
      file(relativePath: { eq: "creativity-1.png" }) {
        id
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)

  return (
    <HeroContainer>
      <span className={s_.title1}>The Pain & Paradoxes of</span>
      <span className={s_.title2}> CREATIVITY </span>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Art"
        css={`
          z-index: -1;
          margin-top: -3.8rem;
        `}
      />
    </HeroContainer>
  )
}

function Paradoxes() {
  return (
    <>
      <Header sticky={false} />
      <Container>
        <Hero />
        <ArticleContent/>
        <Footer css={`grid-column: 1/13`}/>
      </Container>
    </>
  )
}

export default Paradoxes
