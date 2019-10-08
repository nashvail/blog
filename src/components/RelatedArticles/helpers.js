import React from "react"
import styled from "styled-components"
import { Link } from "gatsby";

import Constants from "../../utils/Constants"

export const Container = styled.div`
  width: 100%;
  background: ${Constants.COLORS.BLACK[7]};
  border-radius: 4px;
  padding: 1.5rem;
  margin-top: 5rem;
`

export const Title = () => (
  <p
    css={`
      font-size: 0.85rem;
      color: ${Constants.COLORS.BLACK[4]};
      margin-bottom: 0.85rem;
    `}
  >
    Similar articles
  </p>
)

export const ArticleList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const Article = ({ link, text }) => (
  <li>
    <Link to={link}>
      <h4>{text}</h4>
    </Link>
  </li>
)

/*
export default function RelatedArticles({ currentArticleTitle, categories=[] }) {
  console.log(categories);
  return (
    <Container>
      <Title>Similar articles</Title>
      <ArticleList>
        <Article
          link="/blog/better-loader"
          text="How to use Trigonometry to create better loaders"
        />
        <Article
          link="/blog/canvas-image"
          text="How displaying an image on HTML5 canvas works"
        />
      </ArticleList>
    </Container>
  )
}
*/
