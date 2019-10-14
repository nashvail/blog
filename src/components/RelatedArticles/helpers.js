import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Constants from "../../utils/Constants"

import { isExternalLink } from "../../utils/helpers"

export const Container = styled.div`
  width: 100%;
  background: ${Constants.COLORS.BLACK[7]};
  border-radius: 4px;
  padding: 1.5rem;
  margin-top: 4rem;

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    margin-top: -1rem;
  }
`

export const Title = () => (
  <h5
    css={`
      color: ${Constants.COLORS.BLACK[4]};
    `}
  >
    Similar articles
  </h5>
)

export const ArticleList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const Article = ({ link, text }) => {
  return (
    <li
      css={`
        margin: 1rem 0;
      `}
    >
      {isExternalLink(link) ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h4>{text}</h4>
        </a>
      ) : (
        <Link to={link}>
          <h4>{text}</h4>
        </Link>
      )}
    </li>
  )
}
