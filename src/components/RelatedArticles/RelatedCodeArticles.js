import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import { Container, Title, ArticleList, Article } from "./helpers"

const RelatedCodeArticles = ({ currentArticleTitle }) => (
  <StaticQuery
    query={graphql`
      query RelatedCodeArticlesQuery {
        allArticlesJson(filter: { category: { eq: "code" } }) {
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
            <Article title="Hello" link="what" />
            {allArticlesArray
              .sort(() => 0.5 - Math.random())
              .slice(0, 5)
              .map(article => {
                console.log(article)
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

export default RelatedCodeArticles
