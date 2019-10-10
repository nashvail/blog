import React from "react"
import styled from "styled-components"

// Constants
import Constants from "../../../utils/Constants"

// Assets
import "../../../utils/global.css"
import s_ from "./styles.module.css"
import heroImage from "./assets/bubble.png"

// Components
import Header from "../../../components/Header"
import Footer from "./../../../components/Footer"
import SideCard from "../../../components/SideCard"
import RelatedMiscArticles from "../../../components/RelatedArticles/RelatedMiscArticles"

import Content from "./content"

// Styled components
const Container = styled.main`
  /* background: red; */
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  margin: 0 auto;

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    width: ${Constants.BODY_WIDTH["after_first_breakpoint"]};
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[1]}) {
    max-width: ${Constants.BODY_WIDTH["after_second_breakpoint"]};
  }

  @media screen and (max-width: 840px) {
    min-width: 400px;
    width: 90%;
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
  justify-content: space-between;
  /* background: yellow; */

  /* First Breakpoint */
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

const Hero = () => (
  <HeroContainer>
    <div className="text" style={{ alignSelf: "center" }}>
      <span className={s_.publishDate}>August 15, 2019</span>
      <span className={s_.heroText1}>Pockets of</span>
      <span className={s_.heroText2}>Solitude</span>
    </div>
    <div className={s_.image}>
      <img src={heroImage} alt="" />
    </div>
  </HeroContainer>
)

class PocketsOfSolitude extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Hero />
          <Inner>
            <Article>
              <Content />
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
      </div>
    )
  }
}

export default PocketsOfSolitude
