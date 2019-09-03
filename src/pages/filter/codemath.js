import React from "react"
import styled from "styled-components"

// Constants
import Constants from "../../utils/constants"

// Components
import Header from "../../components/Header"
import FilterNav from "../../components/FilterNav"

// Styled components
const Container = styled.main`
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  margin: 0 auto;
`;

class CodeMathArticles extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FilterNav />
        <Container>
          <h1>Code and math articles</h1>
        </Container>
      </>
    )
  }
}

export default CodeMathArticles
