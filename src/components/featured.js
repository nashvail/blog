import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Constants from '../utils/Constants';

// Styled
const Featured = styled.div`
  margin-top: 3rem;
  grid-column: span 12;
  height: 600px;
  /* background: red; */
  display: flex;
  justify-content: space-between;
`

const FeaturedText = styled.div`
  /* background: yellow; */
  width: 40%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  p {
    font-size: 1rem;
  }
`

const FeaturedHeading = styled.h1`
  a {
    text-decoration: none;
    color: ${Constants.COLORS.BLACK[1]};
  }
`

const FeaturedSpoiler = styled.p``

const FeaturedCover = styled.div`
  width: 55%;
  background: url(${props => props.cover});
  background-size: cover;
`;

export default ({ link, title, spoiler, cover }) => (
  <Featured>
    <FeaturedText>
      <FeaturedHeading>
        <Link to={link}>{title}</Link>
      </FeaturedHeading>
      <FeaturedSpoiler>{spoiler}</FeaturedSpoiler>
    </FeaturedText>
    <FeaturedCover cover={cover}></FeaturedCover>
  </Featured>
)
