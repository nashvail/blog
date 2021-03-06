import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Title, ArticleList, Article } from "./helpers"

const RelatedMiscArticles = ({ currentArticleTitle }) => (
  <StaticQuery
    query={graphql`
      query RelatedMiscArticlesQuery{
        allArticlesJson(filter: { category: { eq: "misc." } }) {
          edges {
            node {
              title
              link
            }
          }
        }
      }
    `}
    render={data => {
      const allArticlesArray = data.allArticlesJson.edges.filter(
        article => article.node.title !== currentArticleTitle
      )
      return (
        <Container>
          <Title />
          <ArticleList>
            {allArticlesArray
              .sort(() => 0.5 - Math.random())
              .slice(0, 5)
              .map(article => {
                return (
                  <Article text={article.node.title} link={article.node.link} />
                )
              })}
          </ArticleList>
        </Container>
      )
    }}
  />
)

export default RelatedMiscArticles
