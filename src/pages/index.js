import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "../components/Header"
import FilterNav from "../components/FilterNav"
import Constants from "../utils/Constants"
import Featured from "../components/Featured"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

// Helpers
import { renderArticlePreviews } from "../utils/helpers"

import {
  title,
  link,
  spoiler,
  cover
} from "./blog/pockets-of-solitude";

// This is everything below the header
const HomePage = styled.main`
  margin: 0 auto;
  padding-top: 2rem;
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  /* background: blue; */

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

const Articles = styled.section`
  width: 100%;
  display: grid;
  /* auto-fit is like you decide the number of columns based on the viewport width*/
  /* auto-fit is magic */
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin-bottom: 2rem;
  grid-gap: 2rem;
`

const ArticlesGrid = ({ children }) => (
  <StaticQuery
    query={graphql`
      query ArticlesQuery {
        allArticlesJson {
          edges {
            node {
              title
              link
              category
              spoiler
              publishDate
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Articles>{renderArticlePreviews(data.allArticlesJson.edges)}</Articles>
      )
    }}
  />
)

export default () => (
  <div>
    <SEO />
    <Header />
    <FilterNav />
    {/* <Featured
      type="NEW"
      link={link}
      title={title}
      cover={cover}
      spoiler={spoiler}
    /> */}
    <HomePage>
      <ArticlesGrid />
      <Footer />
    </HomePage>
  </div>
)
