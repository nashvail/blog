import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types";

// Keyframe animations
import { fadeIn } from "../../utils/KeyframeAnimations"

const Container = styled.div`
  animation: ${fadeIn} 0.25s;
  padding: 1rem;
  background: #fff;
  display: ${props => (props.visible ? "block" : "none")};
  padding-top: 6rem;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`

export default function Overlay({ toggle = () => {}, visible, ...props }) {
  return <Container visible={visible}>
    <h1>This is the overlay yo</h1>
  </Container>
}

Overlay.propTypes = {
  toggle: PropTypes.func,
  visible: PropTypes.bool.isRequired
};


/*
<Overlay expanded={expanded}>
          <ul
            css={`
              list-style-type: none;
              margin: 0;
            `}
          >
            <li onClick={this.toggleMenu}>
              <Link to="/">
                <h2>Articles</h2>
              </Link>
            </li>
            <li onClick={this.toggleMenu}>
              <Link to="/about">
                <h2>About</h2>
              </Link>
            </li>
            <li onClick={this.toggleMenu}>
              <Link to="/work">
                <h2>Work</h2>
              </Link>
            </li>
          </ul>
          <br />
          <hr
            css={`
              color: ${Constants.COLORS.BLACK[4]};
            `}
          />
          <h4
            css={`
              color: ${Constants.COLORS.BLACK[3]};
            `}
          >
            Filter articles
          </h4>
          <br />
          <ul
            css={`
              list-style-type: none;
              margin: 0;
            `}
          >
            <li>
              <h4>All</h4>
            </li>
            <li>
              <Link to="/filter/codemath">
                <h4>Code & Math</h4>
              </Link>
            </li>
            <li>
              <h4>Life & Philosophy</h4>
            </li>
            <li>
              <h4>Design</h4>
            </li>
          </ul>
        </Overlay>*/
