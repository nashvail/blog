import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// Constants
import Constants from "../utils/Constants"

// Helpers
import { isExternalLink, formatPostDate } from "../utils/helpers"

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 1rem; */
  /* background: lightgrey; */
  /*
  border-right: 1px solid ${Constants.COLORS.BLACK[4]};
  &:last-of-type {
    border: none;
  }
  */
`

const PreviewImage = styled.div`
  width: 100%;
  height: 0.1rem;
  background: ${Constants.COLORS.BLACK[6]};
`

const Title = styled.h3``

const Spoiler = styled.p``

const PublishDate = styled.span`
  font-family: "Input Mono";
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
    let { link, title, spoiler, category, publishDate } = this.props

    let articleLink
    if (isExternalLink(link))
      articleLink = (
        <a href={link} target="_blank">
          {title}
        </a>
      )
    else articleLink = <Link to={link}>{title}</Link>

    return (
      <Container>
        <PreviewImage />
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
