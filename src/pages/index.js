import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Helmet from "react-helmet";

import Header from "../components/Header"
import FilterNav from "../components/FilterNav";
import Constants from "../utils/Constants";
import Featured from '../components/Featured';

// Featured article stuff
import { link, title, cover, spoiler } from './blog/pockets-of-solitude/featured-content';

// This is everything below the header
const HomePage = styled.main`
  margin: 0 auto;
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  /* background: blue; */

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    max-width: ${Constants.BODY_WIDTH["after_first_breakpoint"]};
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[1]}) {
    max-width: ${Constants.BODY_WIDTH["after_second_breakpoint"]}
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[2]}) {
    width: 90%;
  }
`;

const Articles = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(autofit, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin-top: 2rem;
`;

export default () => (
  <div>
    <Helmet>
      <title>Nash Vail</title>
    </Helmet>
    <Header />
    <FilterNav />
    <HomePage>
      <Featured 
        link={link}
        title={title}
        cover={cover}
        spoiler={spoiler}
      />
      <Articles>
        <div style={{
          background: "yellow",
          gridColumnStart: "1",
          gridColumnEnd: "7"
        }}>
          First article
        </div>
        <div style={{
          background: "green",
          gridColumnStart: "7",
          gridColumnEnd: "13"
        }}>
          Second article
        </div>
      </Articles>
    </HomePage>
  </div>
)
