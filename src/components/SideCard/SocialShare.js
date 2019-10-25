import React from "react"
import styled from "styled-components"

// Constants
import Constants from "../../utils/Constants"

// Icons
import TwitterIcon from "../../assets/twitter.svg"
import LinkIcon from "../../assets/link.svg"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const SocialButton = styled.a`
  display: flex;
  justify-content: center;
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
`

const TweetButton = styled(SocialButton)``

const CopyLinkButton = styled(SocialButton)``

export default function SocialShare({ tweetLink }) {
  return (
    <Container>
      <TweetButton href={tweetLink} target="_blank">
        <img src={TwitterIcon} alt="Twitter icon"/>
        Tweet
      </TweetButton>
      <CopyLinkButton>
        <img src={LinkIcon} alt="Copy link icon"/>
        Copy link
      </CopyLinkButton>
    </Container>
  )
}
