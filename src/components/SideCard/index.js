import React from "react"
import styled from "styled-components"
import Media from "react-media"
import PropTypes from "prop-types"

//Constants
import Constants from "../../utils/Constants"

// Components
import NewsletterPrompt from "./NewsletterPrompt"
import SocialShare from "./SocialShare"
import AdSpace from "./AdSpace"

// This should be coming through props, but anyway.
const SCROLLING_STOP_THRESHOLD = 150
const MediaQuery = `(min-width:${Constants.BREAKPOINTS[0]})`

const Container = styled.div`
  position: static;
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto auto auto;

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    margin: 3rem auto 3rem auto;
    width: 100%;
  }
`

export default function SideCard({ style, tweetLink }) {
  const [sticky, setSticky] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLLING_STOP_THRESHOLD) setSticky(true)
      else setSticky(false)
    }
    window.addEventListener("scroll", handleScroll, true)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sticky])

  const getConditionalStickyStyles = () => {
    let newStyle = style
    if (sticky) {
      newStyle = {
        ...style,
        position: "sticky",
        top: SCROLLING_STOP_THRESHOLD,
      }
    } else {
      newStyle = {
        ...style,
        position: "static",
      }
    }

    return newStyle
  }

  const Ad = () => (
    <AdSpace
      title="Learning Git?"
      actionText="Take my Git course on Skillshare"
    />
  )

  return (
    <Media query={MediaQuery}>
      {matches =>
        matches ? (
          <Container style={{ ...getConditionalStickyStyles() }}>
            <SocialShare tweetLink={tweetLink} />
            <NewsletterPrompt />
            <Ad />
          </Container>
        ) : (
          <Container>
            <SocialShare tweetLink={tweetLink} />
            <NewsletterPrompt />
            <Ad />
          </Container>
        )
      }
    </Media>
  )
}

SideCard.propTypes = {
  style: PropTypes.object,
  tweetLink: PropTypes.string.isRequired,
}
