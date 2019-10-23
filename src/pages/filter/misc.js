import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

// Constants
import Constants from "../../utils/Constants"

// Components
import Header from "../../components/Header"
import FilterNav from "../../components/FilterNav"
import ArticleGrid from "../../components/ArticleGrid"
import ArticleGridContainer from "../../components/ArtcileGridContainer";

// Helpers
import { renderArticlePreviews } from "../../utils/helpers";

const FilteredArticlesGrid = ({ children }) => (
  <StaticQuery
    query={graphql`
      query PhilArticlesQuery {
        allArticlesJson(filter: {
          category: {
            eq: "misc."
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

class PhilosophyArticles extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FilterNav />
        <ArticleGridContainer>
          <FilteredArticlesGrid />
        </ArticleGridContainer>
      </>
    )
  }
}

export default PhilosophyArticles
