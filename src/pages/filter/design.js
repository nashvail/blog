import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

// Constants
import Constants from "../../utils/constants"

// Components
import Header from "../../components/Header"
import FilterNav from "../../components/FilterNav"
import ArticlePreview from "../../components/ArticlePreview"

// Styled components
const Container = styled.main`
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  margin: 0 auto;
`
const Articles = styled.section`
  width: 100%;
  display: grid;
  /* auto-fit is like you decide the number of columns based on the viewport width*/
  /* auto-fit is magic */
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin-top: 2rem;
  margin-bottom: 2rem;
  grid-gap: 1em;
`

function renderArticlePreviews(articles) {
  // articles is an array of json article objects
  let articlesArray = []; 
  articles.forEach(article => 
    articlesArray.push(<ArticlePreview title={article.node.title} link={article.node.link}/>)
  );
  console.log(articles);
  return articlesArray;
}

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
