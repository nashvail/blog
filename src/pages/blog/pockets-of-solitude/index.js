import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"
import Img from "gatsby-image"

// Constants
import Constants from "../../../utils/Constants"

// Assets
import "../../../utils/global.css"
import s_ from "./styles.module.css"
import FeaturedCover from "./images/featured-cover.gif"

// Components
import Header from "../../../components/Header"
import Footer from "./../../../components/Footer"
import SideCard from "../../../components/SideCard"
import RelatedMiscArticles from "../../../components/RelatedArticles/RelatedMiscArticles"
import SEO from "../../../components/SEO"
import Content from "./content"

// Disqus config
const disqusConfig = {
  shortname: process.env.GATSBY_DISQUS_NAME,
  config: { identifier: "/blog/pockets-of-solitude", title: "Pockets of Solitude"},
}

// Styled components
const Container = styled.main`
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  margin: 0 auto;

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    width: ${Constants.BODY_WIDTH["after_first_breakpoint"]};
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[1]}) {
    max-width: ${Constants.BODY_WIDTH["after_second_breakpoint"]};
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[2]}) {
    /* min-width: 400px; */
    width: 85%;
  }

  .gatsby-image-wrapper {
    width: 70%;
    margin: 0 auto;
  }

`

const Article = styled.article`
  max-width: 750px;
  margin-top: -250px;

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    margin-top: 0px;
    margin: 0 auto;
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[1]}) {
    margin-top: 0px;
  }
`

const HeroContainer = styled.section`
  display: flex;
  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    flex-direction: column-reverse;
    margin-top: 2rem;
  }
`

const Inner = styled.main`
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 72ch 1fr;
  grid-gap: 3rem;

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    grid-template-columns: auto;
    grid-gap: 2rem;
    width: 100%;
  }
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroImageQuery {
      file(relativePath: { eq: "bubble.png" }) {
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
      <div className={s_.text} style={{ alignSelf: "center" }}>
        <span className={s_.publishDate}>November 13, 2019</span>
        <span className={s_.heroText1}>Pockets of</span>
        <span className={s_.heroText2}>Solitude</span>
      </div>
      <Img fluid={data.file.childImageSharp.fluid} alt="Art" className={s_.image}/>
    </HeroContainer>
  )
}

class PocketsOfSolitude extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="Pockets of Solitude"
          keywords={['distraction', 'online', 'social', 'social media', 'alone', 'solitude']}
        />
        <Header />
        <Container>
          <Hero />
          <Inner>
            <Article>
              <Content />
              <br/>
            <DiscussionEmbed {...disqusConfig}/>
            </Article>
            <aside>
              <RelatedMiscArticles />
              <SideCard
                style={{
                  height: "200px",
                  marginTop: "2rem",
                }}
                stickyThreshold={180}
                tweetLink={`https://twitter.com/intent/tweet/?text=Pockets%20Of%20Solitude&url=https://nashvail.me/blog/pockets-of-solitude%2F&via=nashvail`}
                hideAd
              />
            </aside>
          </Inner>
          <Footer />
        </Container>
      </>
    )
  }
}

export default PocketsOfSolitude

export const title = "Pockets of solitude"
export const link = "/blog/pockets-of-solitude/"
export const spoiler =
  "How to stay sane in the face of brain mushing, mind numbing flood of useless information. Like, where Becky is having her vacation and the pictures of Jonathan's kid."
export const cover = FeaturedCover

