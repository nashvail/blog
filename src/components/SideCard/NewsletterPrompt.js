import React from "react"
import styled from "styled-components"

// Constants
import Constants from "../../utils/Constants"

import NewsletterIllo from "../../assets/newsletter.png"

const SUBSCRIBE_FORM_LINK = "http://eepurl.com/gemNHf"

const Container = styled.div`
  background-color: ${Constants.COLORS.BLACK[6]};
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${NewsletterIllo});
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: 120% 50%;

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    background-size: 15%;
    background-position: 105% 50%;
  }
`

const LinkButton = styled.a`
  background: #121212;
  border-radius: 4px;
  color: white;
  padding: 0.5rem 1.3rem;
  font-family: "Roboto";
  font-size: 0.8rem;
  cursor: pointer;
  border: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  :hover {
    text-decoration: none;
  }
`

export default function NewsletterPrompt() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <Container>
      <LinkButton href={SUBSCRIBE_FORM_LINK} target="_blank" css={``}>
        Subscribe to newsletter
      </LinkButton>
    </Container>
  )
}
