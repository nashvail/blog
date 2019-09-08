import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// Constants
import Constants from "../utils/Constants"

// Helpers
import { isExternalLink } from "../utils/helpers"

// Styled Components
const Container = styled.div`
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
  height: 250px;
  background: cyan;
`

const Title = styled.h3`
  margin-top: 1rem;
  /* margin-bottom: 1rem; */
`

const Spoiler = styled.p``

const Category = ({ category }) => {
  return <span>{category}</span>
}

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
        <PreviewImage/>
        <Category category={category} />
        <Title>{articleLink}</Title>
        {publishDate}
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
  publishDate: PropTypes.string.isRequired
}

export default ArticlePreview
