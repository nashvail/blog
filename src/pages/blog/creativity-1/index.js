import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Constants
import Constants from "../../../utils/Constants"

// Components
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

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
      <span className={s_.title2}>CREATIVIT</span>
      <Img fluid={data.file.childImageSharp.fluid} alt="Art" />
    </HeroContainer>
  )
}

function Paradoxes() {
  return (
    <>
      <Header  sticky={false} />
      <Container>
        <Hero />
        <article className={s_.mainArticle}>
          <p>
            "Fuck you Isabel," my mind screeched as I was about to put a
            spoonful of steaming hot Indian breakfast soup in my mouth. No
            matter how much I enjoyed the sensation of something hot flooding
            the in-betweens of my tongue and teeth on a cold winter morning, the
            only thing that interested me then was where did "Isabel" come from?
            And why did I curse her?
          </p>
          <p>I don't have a single friend or a family member with the name Isabel, neither have I ever met someone named Isabel.</p>
          <p>Somewhere along the way I think the word Isabel embedded itself into my subconscious and got mixed with something else in there. And then, at the right moment - which is never for me to decide, but the subconscious itself - it decided to blurt itself out.</p>
        </article>
      </Container>
    </>
  )
}

export default Paradoxes
