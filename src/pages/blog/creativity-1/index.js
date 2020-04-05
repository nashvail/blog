import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Components
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import SEO from "../../../components/SEO"
import ArticleContent from "./article-content"

// CSS
import s_ from "./styles.module.css"

// Breakpoints
const BREAKPOINTS = [
  "1300px",
  "1185px",
  "800px"
]

// Widths
const BODY_WIDTH = {
  before_first_breakpoint: "1140px",
  after_frist_breakpoint: "1100px",
  after_second_breakpoint: "75%",
  after_third_breakpoint: "85%"
}

const Container = styled.main`
  margin: 0 auto;
  /* background: green; */
  width: ${BODY_WIDTH["before_first_breakpoint"]};

  @media screen and (max-width: ${BREAKPOINTS[0]}) {
    width: ${BODY_WIDTH["after_frist_breakpoint"]};
  }

  @media screen and (max-width: ${BREAKPOINTS[1]}) {
    width: ${BODY_WIDTH["after_second_breakpoint"]};
  }

  @media screen and (max-width: ${BREAKPOINTS[2]}) {
    width: ${BODY_WIDTH["after_third_breakpoint"]};
  }
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
        className={s_.coverImage}
      />
    </HeroContainer>
  )
}

function Paradoxes() {
  return (
    <>
      <SEO
        title="The Pain and Paradoxes of Creativity - Nash Vail"
        keywords={['creativity', 'research', 'madness', 'what is creativity', 'creative', 'creation', 'essay', 'writers', 'poets', 'obsession']}
      />
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
