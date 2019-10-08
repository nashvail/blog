import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby";

// Constants
import Constants from "../../utils/Constants"

const Container = styled.div`
  width: 100%;
  background: ${Constants.COLORS.BLACK[7]};
  border-radius: 4px;
  padding: 1.5rem;
  margin-top: 5rem;
`

const Title = styled.p`
  font-size: 0.85rem;
  color: ${Constants.COLORS.BLACK[4]};
  margin-bottom: 0.85rem;
`;

const ArticleList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Article = ({link, text}) => (
  <li>
    <h4>
      <Link to={link}>{text}</Link>
    </h4>
  </li>
);

export default function RelatedArticles() {
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
