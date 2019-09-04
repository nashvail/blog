import React from "react"
import styled from "styled-components"
import Media from "react-media"

//Constants
import Constants from "../utils/Constants"

// This should be coming through props, but anyway.
const SCROLLING_STOP_THRESHOLD = 150;
const MediaQuery = `(min-width:${Constants.BREAKPOINTS[0]})`;

const Container = styled.div`
  position: static;
  width: 100%;
  height: 500px;
  float: right;
  background: ${Constants.COLORS.BLACK[2]};

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    margin: 3rem auto 3rem auto;
    width: 50%;
  }
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
    let { sticky } = this.state;
    let { style } = this.props;

    let newStyle = style
    if (sticky) {
      newStyle = {
        ...style,
        position: "sticky",
        top: SCROLLING_STOP_THRESHOLD
      }
    } else {
      newStyle = {
        ...style,
        position: "static",
      };
    }

    return newStyle;
  };

  getResponsiveSideCardStyles = () => (
    {
      ...this.props.style,
      width: "100%",
      margin: "0"
    }
  );

  render() {
    let { style } = this.props
    return(
      <Media query={MediaQuery}>
        { matches =>
          matches ? (
            <Container style={{ ...this.getConditionalStickyStyles()}}>So, like hellow</Container>
          ) : (
            <Container style={{...this.getResponsiveSideCardStyles()}}/>
          )
        }
      </Media>

    );
  }
}

export default SideCard
