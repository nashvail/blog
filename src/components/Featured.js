import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

import Constants from "../utils/Constants"

// Components
import Pill from "./Pill"

// Styled
const Featured = styled.div`
  margin: 3rem auto 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    flex-direction: column-reverse;
    max-width: ${Constants.BODY_WIDTH["after_first_breakpoint"]};
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    max-width: ${Constants.BODY_WIDTH["after_first_breakpoint"]};
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[1]}) {
    max-width: ${Constants.BODY_WIDTH["after_second_breakpoint"]};
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[2]}) {
    width: 90%;
  }
`

const FeaturedText = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 2rem;

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: none;
    justify-content: auto;
  }
`

const FeaturedHeading = styled.h1`
  margin-bottom: 0.5rem;
  a {
    text-decoration: none;
    color: ${Constants.COLORS.BLACK[1]};

    &:hover {
      text-decoration: underline;
    }
  }
`

const FeaturedSpoiler = styled.p`
  font-size: 1.1rem;
`

const FeaturedCover = styled.div`
  width: 55%;
  img {
    width: 100%;
    max-width: 100%;
    /* and this, once you have a proper cover image*/
    /* visibility: hidden; */
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    width: 100%;
  }
`

export default function FeaturedArticle({
  link,
  title,
  spoiler,
  cover,
  type = "FEATURED",
}) {
  return (
    <Featured>
      <FeaturedText>
        <Pill type={type} />
        <FeaturedHeading>
          <Link to={link}>{title}</Link>
        </FeaturedHeading>
        <FeaturedSpoiler>{spoiler}</FeaturedSpoiler>
      </FeaturedText>
      <FeaturedCover>
        <img src={cover} alt="Featured cover" />
      </FeaturedCover>
    </Featured>
  )
}

FeaturedArticle.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  spoiler: PropTypes.string.isRequired,
  cover: PropTypes.element.isRequired,
}
