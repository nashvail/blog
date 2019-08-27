import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Helmet from "react-helmet";

import Header from "../components/Header"
import FilterNav from "../components/FilterNav";
import Constants from "../utils/constants";
import Featured from '../components/Featured';

// Featured article stuff
import { link, title, cover, spoiler } from './blog/pockets-of-solitude/featured-content';

const HomePage = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 77px);
  grid-gap: 1rem;
  margin: 0 auto;
  max-width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    max-width: ${Constants.BODY_WIDTH["after_first_breakpoint"]};
  }
`;

const Articles = styled.section`
  grid-column: span 12;
  width: 100%;
  background: yellow;
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
        This is where the rest of the articles will be listed right?
      </Articles>
    </HomePage>
  </div>
)
