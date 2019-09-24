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
      query DesignArticlesQuery {
        allArticlesJson(filter: {
          category: {
            eq: "design"
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
                  fluid(maxWidth: 800){
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

class DesignArticles extends React.Component {
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

export default DesignArticles
