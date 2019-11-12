import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Constants
import Constants from "../../utils/Constants"

// Custom components
import Header from "../../components/Header"
import SEO from "../../components/SEO"
import Footer from "../../components/Footer"

// Import styles
import s_ from "./styles.module.css"

const Container = styled.div`
  margin: 1rem auto 0 auto;
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    max-width: ${Constants.BODY_WIDTH["after_first_breakpoint"]};
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[1]}) {
    max-width: ${Constants.BODY_WIDTH["after_second_breakpoint"]};
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[2]}) {
    width: 90%;
  }
`

const Inner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 500px 1fr 600px;
  position: relative;

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    grid-template-columns: 1fr 20px 1fr;
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[2]}) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const Main = styled.main`
  grid-column: 3;
  margin-top: -2rem;
  @media screen and (max-width: ${Constants.BREAKPOINTS[2]}) {
    margin-top: 0;
  }
`

const Content = styled.article`
  width: 100%;
  padding-top: calc(60px + 1.5rem);
  padding-left: calc(60px + 1rem);
  font-size: 1.15rem;
`

const Side = styled.aside``

const ImageContainer = styled.div`
  display: auto;
  margin: 2rem auto 0 auto;
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    width: 90%;
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[1]}) {
    width: 80%;
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[2]}) {
    /* width: ${Constants.BODY_WIDTH["after_second_breakpoint"]}; */
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query AboutImageQuery {
      file(relativePath: { eq: "about.png" }) {
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
    <>
      <SEO title="About Nash" />
      <Header hideLogo hideShadow sticky={false} />
      <ImageContainer>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Please work!"
          className={s_.image}
        />
      </ImageContainer>
      <Container>
        <Inner>
          <div
            css={`
              margin-top: calc(60px + 1.5rem - 2rem);
            `}
          >
            <h3>
              <a href="https://www.notion.so/nashvail/a01108389ef145baa596792d6f0195cb?v=5faaabe552274806a8a981898e28b6fd">
                Reading list
              </a>
            </h3>
            <p>
              A while ago I started maintaining a Kanaban board of the books I
              plan to read, reading, have read or abandoned.
            </p>
            <h3>Learning list</h3>
            <p>
              All the courses I have taken online. Skillshare is my favorite
              place to find quality courses so most of the links will lead you
              there.
            </p>
          </div>
          <Main>
            <div className={s_.nash}>
              <span>NASH</span>
              <b></b>
              <span>VAIL</span>
            </div>
            <Content>
              <p>
                My various interests have forced me to dabble and explore more
                than one fields. Graphic Design, Illustration, Frontend
                Development, Writing are some of the things I enjoy the most.
                Email howdynash@gmail.com for work enquiries.
              </p>
            </Content>
          </Main>
        </Inner>
        <br />
        <Footer />
      </Container>
    </>
  )
}
