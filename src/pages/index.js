import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import POSHeroImage from "./pockets-of-solitude/assets/bubble.png"
import Header from "../components/header"
import FilterNav from "../components/filter-nav";

const HomePage = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 77px);
  grid-gap: 1rem;
`

const Featured = styled.div`
  margin-top: 2rem;
  grid-column: span 12;
  height: 600px;
  /* background: red; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`

const FeaturedText = styled.div`
  /* background: yellow; */
  width: 40%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  p {
    font-size: 1.2rem;
  }
`

const FeaturedCover = styled.div`
  width: 55%;
  background: url(${POSHeroImage});
  background-size: cover;
`

const FeaturedHeading = styled.h1``

export default () => (
  <div>
    <Header />
    <FilterNav />
    <HomePage>
      <Featured>
        <FeaturedText>
          <FeaturedHeading>Pockets of solitude</FeaturedHeading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            sapien quam. Sed dapibus est id enim facilisis, at posuere turpis
            adipiscing. Quisque sit amet dui dui.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est
            id enim facilisis, at posuere turpis adipiscing. Quisque sit amet
            dui dui.
          </p>
        </FeaturedText>
        <FeaturedCover></FeaturedCover>
      </Featured>
    </HomePage>
  </div>
)
