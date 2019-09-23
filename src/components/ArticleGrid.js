import styled from "styled-components"

export default styled.section`
  width: 100%;
  display: grid;
  /* auto-fit is like you decide the number of columns based on the viewport width*/
  /* auto-fit is magic */
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin-top: 2rem;
  margin-bottom: 2rem;
  grid-gap: 1.5rem;
`
