import React from "react"
import { StaticQuery, graphql } from "gatsby"

// Components
import Header from "../../components/Header"
import FilterNav from "../../components/FilterNav"
import ArticleGrid from "../../components/ArticleGrid"
import ArticleGridContainer from "../../components/ArtcileGridContainer"
import SEO from "../../components/SEO";

// Helpers
import { renderArticlePreviews } from "../../utils/helpers";


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
        <SEO
          title="Code and Math Articles"
        />
        <Header />
        <FilterNav />
        <ArticleGridContainer>
          <FilteredArticlesGrid />
        </ArticleGridContainer>
      </>
    )
  }
}

export default CodeMathArticles
