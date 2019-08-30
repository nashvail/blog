import React from "react"
import styled from "styled-components";
import { Link } from "gatsby";

// Constants
import Constants from "../utils/Constants";

// Styled Components
const Container = styled.div`
  /* padding: 1rem; */
  /* background: lightgrey; */
  /*
  border-right: 1px solid ${Constants.COLORS.BLACK[4]};
  &:last-of-type {
    border: none;
  }
  */
`;

const PreviewImage = styled.div`
  width: 100%;
  height: 200px;
  background: cyan;
`;

const Title = styled.h3`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Spoiler = styled.p`

`;

class ArticlePreview extends React.Component {
  render() {
    let { link, title } = this.props;
    console.log(link,title);
    return (
      <Container>
        <PreviewImage>

        </PreviewImage>
        <Title><Link to={link}>{title}</Link></Title>
        <Spoiler>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
          sapien quam. Sed dapibus est id enim facilisis, at posuere turpis
          adipiscing. Quisque sit amet dui dui.
        </Spoiler>
      </Container>
    );
  }
}

export default ArticlePreview
