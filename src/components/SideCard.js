import React from "react"
import styled from "styled-components"
import Media from "react-media"
import PropTypes from "prop-types"

//Constants
import Constants from "../utils/Constants"

// This should be coming through props, but anyway.
const SCROLLING_STOP_THRESHOLD = 150
const MediaQuery = `(min-width:${Constants.BREAKPOINTS[0]})`

const Container = styled.div`
  position: static;
  width: 100%;
  float: right;
  /* height: 500px; */
  /* background: ${Constants.COLORS.BLACK[2]}; */
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto auto auto;

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    margin: 3rem auto 3rem auto;
    width: 50%;
  }
`

const SocialShare = styled.div`
  display: flex;
  justify-content: space-between;
`

const TweetButton = styled.button`
  width: 49%;
  height: 100%;
  background: #fff;
  border: none;
  font-family: "Roboto";
  /* font-weight: 500; */
  font-size: 0.8rem;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 0.7rem 0.5rem;
  color: ${Constants.COLORS.BLACK[3]};
`

const CopyLinkButton = styled.button`
  width: 49%;
  height: 100%;
  background: #fff;
  border: none;
  font-family: "Roboto";
  /* font-weight: 500; */
  font-size: 0.8rem;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 0.7rem 0.5rem;
  color: ${Constants.COLORS.BLACK[3]};
`

const NewsletterPrompt = styled.div`
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`

const AdSpace = styled.div`
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`

class SideCard extends React.Component {
  state = {
    sticky: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    let currentWindowScrollPos = window.scrollY

    if (currentWindowScrollPos >= SCROLLING_STOP_THRESHOLD) {
      this.makeSticky()
    } else {
      this.unstick()
    }
  }

  makeSticky = () => {
    this.setState({
      sticky: true,
    })
  }

  unstick = () => {
    this.setState({
      sticky: false,
    })
  }

  getConditionalStickyStyles = () => {
    let { sticky } = this.state
    let { style } = this.props

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

  getResponsiveSideCardStyles = () => ({
    ...this.props.style,
    width: "100%",
    margin: "0",
  })

  render() {
    return (
      <Media query={MediaQuery}>
        {matches =>
          matches ? (
            <Container style={{ ...this.getConditionalStickyStyles() }}>
              <SocialShare>
                <TweetButton>Tweet</TweetButton>
                <CopyLinkButton>Copy link</CopyLinkButton>
              </SocialShare>
              <NewsletterPrompt>Subscribe</NewsletterPrompt>
              <AdSpace>Here is something to buy</AdSpace>
            </Container>
          ) : (
            <Container style={{ ...this.getResponsiveSideCardStyles() }}>
              <SocialShare>Twitter</SocialShare>
              <NewsletterPrompt>Subscribe asshole </NewsletterPrompt>
              <AdSpace>Here is something to buy</AdSpace>
            </Container>
          )
        }
      </Media>
    )
  }
}

SideCard.propTypes = {
  style: PropTypes.object,
}

export default SideCard
