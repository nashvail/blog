import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// Constants
import Constants from "../utils/Constants"

// Helpers
import { isExternalLink, formatPostDate } from "../utils/helpers"

// Local Components
import Pill from "./Pill"

// Styled Components
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #fcfcfc;
  border-radius: 12px;
`

const Title = styled.h3``

const Spoiler = styled.p``

const PublishDate = styled.span`
  font-family: "Roboto";
  font-size: 0.8rem;
  color: ${Constants.COLORS.BLACK[4]};
  margin: 0.5rem 0;
`

const Category = styled.span`
  margin: 0.8rem 0 0.5rem 0;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-family: Roboto;
  color: ${Constants.COLORS.BLACK[4]};
  font-weight: bold;
`

const Categories = ({ category }) => <Category>{category.join(" / ")}</Category>

class ArticlePreview extends React.Component {
  render() {
    let {
      link,
      title,
      spoiler,
      category,
      publishDate,
      cover,
      recent,
    } = this.props

    let articleLink
    if (isExternalLink(link))
      articleLink = (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      )
    else articleLink = <Link to={link}>{title}</Link>

    return (
      <Container>
        {recent && <Pill type="NEW" />}
        <Img fluid={cover} />
        <div
          css={`
            margin: 0.5rem;
          `}
        />
        <Categories category={category} />
        <Title>{articleLink}</Title>
        <PublishDate>{formatPostDate(publishDate)}</PublishDate>
        <Spoiler>{spoiler}</Spoiler>
      </Container>
    )
  }
}

ArticlePreview.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  spoiler: PropTypes.string.isRequired,
  category: PropTypes.arrayOf(PropTypes.string),
  publishDate: PropTypes.string.isRequired,
}

export default ArticlePreview
