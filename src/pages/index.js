import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

import POSHeroImage from "./pockets-of-solitude/assets/bubble.png"
import Header from "../components/header"

const HomePage = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 77px);
  grid-gap: 1rem;
`;

const Featured = styled.div`
  margin-top: 2rem;
  grid-column: span 12;
  grid-gap: 1rem;
  height: 600px;
`;

const FeaturedText = styled.div`
  grid-column: span 5;
  padding: 0;
  margin: 0;
`;

const FeaturedCover = styled.div`
  grid-column-start: 6;
  grid-column-end: 12;
  background: url(${POSHeroImage});
  background-size: cover;
`;

const FeaturedHeading = styled.h1`

`;

export default () => (
  <div>
    <Header />
    <HomePage>
      <Featured>
        <FeaturedText>
          <FeaturedHeading>Pockets of solitude</FeaturedHeading>
        </FeaturedText>
        <FeaturedCover></FeaturedCover>
      </Featured>
    </HomePage>
  </div>
)
