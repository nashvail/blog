import React from "react"
import styled from "styled-components"

// Constants
import Constants from "../../utils/Constants"

// Custom components
import Header from "../../components/Header"
import SEO from "../../components/SEO"

// Import styles
import s_ from "./styles.module.css"

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  margin: 2rem auto 0 auto;
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  position: relative;

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    max-width: ${Constants.BODY_WIDTH["after_first_breakpoint"]};
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[1]}) {
    max-width: ${Constants.BODY_WIDTH["after_second_breakpoint"]};
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[2]}) {
    width: 90%;
  }
`

const Main = styled.main`
`

const Content = styled.article`
  width: 100%;
  padding: calc(60px + 1.5rem);
  padding-left: calc(60px + 1rem);
`

const Side = styled.aside``

export default () => (
  <>
    <SEO title="About Nash" />
    <Header hideLogo hideShadow sticky={false}/>
    <Container>
      <Main>
        <div className={s_.nash}>
          <span>NASH</span>
          <b></b>
          <span>VAIL</span>
        </div>
        <Content>
          <p>
            Nash is a Front end Developer, illustrator, graphic and UI designer
            and not a human. Nash is a Front end Developer, illustrator, graphic
            and UI designer and not a human. Nash is a Front end Developer,
            illustrator, graphic and UI designer and not a human.
          </p>
          <p>
            Nash is a Front end Developer, illustrator, graphic and UI designer
            and not a human. Nash is a Front end Developer, illustrator, graphic
            and UI designer and not a human. Nash is a Front end Developer,
            illustrator, graphic and UI designer and not a human.
          </p>
          <h2>Reading list</h2>
          <p>Sample text for the reading list section of the page</p>

          <h2>Learning list</h2>
          <p>Sample test for the learning list section of the page.</p>
        </Content>
      </Main>
      <Side>
        <p>Social media and contact links</p>
      </Side>
    </Container>
  </>
)
