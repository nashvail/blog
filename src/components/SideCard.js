import React from "react"
import styled from "styled-components"
import Media from "react-media"
import PropTypes from "prop-types"

// Icons
import TwitterIcon from "../assets/twitter.svg"
import LinkIcon from "../assets/link.svg"

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

const SocialButton = styled.a`
  display: flex;
  justify-content:center;
  width: 49%;
  height: 100%;
  background: #fff;
  border: none;
  font-family: "Roboto";
  font-size: 0.8rem;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 0.7rem 0.5rem;
  border: 2px solid white;
  color: ${Constants.COLORS.BLACK[3]};
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    border: 2px solid ${Constants.COLORS.BLACK[0]};
    text-decoration: none;
  }

  img {
    margin: 0;
    padding-right: 0.4rem;
  }
`;

const TweetButton = styled(SocialButton)`
`;

const CopyLinkButton = styled(SocialButton)`
`;

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

  copyCurrentLinkToClipboard = () => {
    // Farily trivial implementation
    window.prompt("Copy Cmd+C, Enter", "Copy this");
  };

  render() {
    return (
      <Media query={MediaQuery}>
        {matches =>
          matches ? (
            <Container style={{ ...this.getConditionalStickyStyles() }}>
              <SocialShare>
                <TweetButton href={this.props.tweetLink} target="_blank">
                  <img src={TwitterIcon}/>
                  Tweet
                </TweetButton>
                <CopyLinkButton onClick={this.copyCurrentLinkToClipboard}>
                  <img src={LinkIcon}/>
                  Copy link
                </CopyLinkButton>
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
  tweetLink: PropTypes.string.isRequired
}

export default SideCard
