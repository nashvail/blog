import React from "react"
import styled from "styled-components"

// Constants
import Constants from "../utils/Constants"

const Footer = styled.footer`
  margin-bottom: 2rem;
  color: ${Constants.COLORS.BLACK[3]};
  span {
    display: block;
  }

  a {
    color: ${Constants.COLORS.BLACK[1]};
    &:hover {
      text-decoration: underline;
    }
  }

  ul li:first-of-type {
    padding-left: 0;
  }
`

const SocialLinksList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 630px) {
    flex-direction: column;
  }
`
const SocialLink = styled.li`
  margin: 0;
  padding: 0 0 0 0.4rem;

  @media screen and (max-width: 630px) {
    padding-left: 0;
  }
`

const FooterSeparator = styled.hr``

const Links = [
  {
    name: "Email",
    link: "mailto:howdynash@gmail.com",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/NashVail",
  },
  {
    name: "GitHub",
    link: "https://github.com/nashvail",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/nashvail",
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com/nashvail",
  },
  {
    name: "LinkedIn",
    link:
      "https://smithhousedesign.com/6-reasons-why-linkedin-sucks-as-told-through-memes/",
  },
]

const SocialLinks = () => (
  <SocialLinksList>
    {Object.keys(Links).map(link => (
      <SocialLink>
        <a href={Links[link].link} target="_blank" rel="noopener noreferrer">
          {Links[link].name}
        </a>
      </SocialLink>
    ))}
  </SocialLinksList>
)

export default () => {
  return (
    <Footer>
      <FooterSeparator />
      <span>© 2016 - 2020, Nash Vail </span>
      <SocialLinks />
      <span
        css={`
          margin-top: 0.5rem;
        `}
      >
        This website is{" "}
        <a
          href="https://github.com/nashvail/blog"
          rel="noopener noreferrer"
          target="_blank"
        >
          open source.
        </a>
      </span>
    </Footer>
  )
}
