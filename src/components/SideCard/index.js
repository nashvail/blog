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

// Assets
import GitThumbnail from "../../assets/course_git.png"

// This should be coming through props, but anyway.
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

export default function SideCard({ style, tweetLink, stickyThreshold=45, hideAd }) {
  const [sticky, setSticky] = React.useState(false)



  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > stickyThreshold) setSticky(true)
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
        top: stickyThreshold,
      }
    } else {
      newStyle = {
        ...style,
        position: "static",
      }
    }

    return newStyle
  }

  const GitAd = () => (
    <AdSpace
      title="Learning Git?"
      actionText="Take my Git course on Skillshare"
      image={GitThumbnail}
      link="https://skl.sh/2riYNbD"
    />
  )

  return (
    <Media query={MediaQuery}>
      {matches =>
        matches ? (
          <Container style={{ ...getConditionalStickyStyles() }}>
            <SocialShare tweetLink={tweetLink} />
            <NewsletterPrompt />
            {!hideAd && <GitAd />}
          </Container>
        ) : (
          <Container>
            <SocialShare tweetLink={tweetLink} />
            <NewsletterPrompt />
            <GitAd />
          </Container>
        )
      }
    </Media>
  )
}

SideCard.propTypes = {
  style: PropTypes.object,
  tweetLink: PropTypes.string.isRequired,
  stickyThreshold: PropTypes.number,
  hideAd: PropTypes.bool
}
