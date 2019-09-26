import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

// Constants
import Constants from "../../utils/constants"

// Components
import Header from "../../components/Header"
import FilterNav from "../../components/FilterNav"
import ArticleGrid from "../../components/ArticleGrid"
import ArticleGridContainer from "../../components/ArtcileGridContainer"
import Featured from "../../components/Featured";

// Helpers
import { renderArticlePreviews } from "../../utils/helpers";

// Featured article stuff
import {
  link,
  title,
  cover,
  spoiler,
} from "../blog/pockets-of-solitude/featured-content"



const FilteredArticlesGrid = ({ children }) => (
  <StaticQuery
    query={graphql`
      query CodeArticlesQuery {
        allArticlesJson(filter: {
          category: {
            eq: "code"
          }
        }){
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
        <ArticleGrid>{renderArticlePreviews(data.allArticlesJson.edges)}</ArticleGrid>
      )
    }}
  />
)

class CodeMathArticles extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FilterNav />
        <Featured type="FEATURED" link={link} title={title} cover={cover} spoiler={spoiler} />
        <ArticleGridContainer>
          <FilteredArticlesGrid />
        </ArticleGridContainer>
      </>
    )
  }
}

export default CodeMathArticles
