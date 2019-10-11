import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

// Constants
import Constants from "../../utils/Constants"

const Container = styled.a`
  display: flex;
  flex-direction: column;
  background: ${Constants.COLORS.BLACK[7]};
  border: 2px solid ${Constants.COLORS.BLACK[7]};
  border-radius: 4px;
  padding: 1.5rem 1rem 0 1rem;
  align-items: center;
  cursor: pointer;

  h4 {
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
  }

  &:hover {
    text-decoration: none;
    border: 2px solid ${Constants.COLORS.BLACK[0]};
  }

  img {
    width: 70%;
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    img {
      width: 20%;
    }
  }
`
export default function AdSpace({
  title = "Ad",
  image,
  actionText = "Do something",
  link,
}) {
  return (
    <Container href={link} target="_blank">
      <h4>{title}</h4>
      {image && <img src={image}/>}
      <p>{actionText}</p>
    </Container>
  )
}

AdSpace.propTypes = {
  title: PropTypes.string,
  image: PropTypes.element,
  actionText: PropTypes.string,
  link: PropTypes.string.isRequired,
}
