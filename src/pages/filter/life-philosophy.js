import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

// Constants
import Constants from "../../utils/constants"

// Components
import Header from "../../components/Header"
import FilterNav from "../../components/FilterNav"
import ArticleGrid from "../../components/ArticleGrid"
import ArticlePreview from "../../components/ArticlePreview"

// Styled components
const Container = styled.main`
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  margin: 0 auto;
`
function renderArticlePreviews(articles) {
  // articles is an array of json article objects
  let articlesArray = []; 
  articles.forEach(article => 
    articlesArray.push(<ArticlePreview title={article.node.title} link={article.node.link}/>)
  );
  return articlesArray;
}

const FilteredArticlesGrid = ({ children }) => (
  <StaticQuery
    query={graphql`
      query PhilArticlesQuery {
        allArticlesJson(filter: {
          category: {
            eq: "philosophy"
          }
        }){
          edges {
            node {
              title
              link
              category
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
