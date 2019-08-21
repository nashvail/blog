import React from "react";
import styled from "styled-components";

// Color constants
const TYPE_COLORS = {
  NEW: '#FFAB01',
  FEATURED: '#3770FF'
};

const TYPE_TEXT = {
  NEW: 'NEW',
  FEATURED: 'FEATURED'
};

const Container = styled.span`
  color: white;
  font-family: 'Roboto';
  font-size: 0.8rem;
  /* TODO */
  /* This needs to be dynamic depending on the text */
  width: 20%;
  max-width: 100px;
  padding: 0.2rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background: ${props => TYPE_COLORS[props.type]};
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.11);
  border-radius: 4px;
`;

export default ({ type }) => (
  <Container type ={type}>
    {TYPE_TEXT[type]}
  </Container>
);