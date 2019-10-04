import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

// Constants
import Constants from "../../utils/Constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${Constants.COLORS.BLACK[7]};
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  align-items: center;

  h4 {
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
  }
`

export default function AdSpace({ title = "Ad", image, actionText = "Do something" }) {
  return <Container>
    <h4>{title}</h4>
    {image && <img src={image} width="80%"/>}
    <p>{actionText}</p>
  </Container>
}

AdSpace.propTypes = {
  title: PropTypes.string,
  image: PropTypes.element,
  actionText: PropTypes.string,
}
