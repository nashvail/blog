import React from "react"
import styled from "styled-components"
import Media from "react-media"

//Constants
import Constants from "../utils/Constants"

const SCROLLING_STOP_THRESHOLD = 160
const MediaQuery = `(min-width:${Constants.BREAKPOINTS[0]})`;

const Container = styled.aside`
  position: static;
  width: 300px;
  height: 500px;
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
    console.log("sidecard ready")
    window.addEventListener("scroll", this.handleScroll, true)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    let currentWindowScrollPos = window.scrollY
    console.log(currentWindowScrollPos);

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
        position: "fixed",
        top: "0",
      }
    } else {
      newStyle = {
        ...style,
        position: "static",
      };
    }

    return newStyle;
  };


  render() {
    let { style } = this.props
    return(
      <Media query={MediaQuery}>
        { matches =>
          matches ? (
            <Container style={{ ...this.getConditionalStickyStyles()}}>So, like hellow</Container>
          ) : (
            <Container {...style}/>
          )
        }
      </Media>

    );
  }
}

export default SideCard
