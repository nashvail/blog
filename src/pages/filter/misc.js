import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

// Constants
import Constants from "../../utils/constants"

// Components
import Header from "../../components/Header"
import FilterNav from "../../components/FilterNav"
import ArticleGrid from "../../components/ArticleGrid"

// Helpers
import { renderArticlePreviews } from "../../utils/helpers";

// Styled components
const Container = styled.main`
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  margin: 0 auto;
`

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
        <Container>
          <FilteredArticlesGrid />
        </Container>
      </>
    )
  }
}

export default PhilosophyArticles
