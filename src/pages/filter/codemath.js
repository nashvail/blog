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
        <Container>
          <FilteredArticlesGrid />
        </Container>
      </>
    )
  }
}

export default CodeMathArticles
