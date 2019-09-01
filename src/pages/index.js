import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Helmet from "react-helmet"

import Header from "../components/Header"
import FilterNav from "../components/FilterNav"
import Constants from "../utils/Constants"
import Featured from "../components/Featured"
import ArticlePreview from "../components/ArticlePreview"
import Footer from "../components/Footer"

// Featured article stuff
import {
  link,
  title,
  cover,
  spoiler,
} from "./blog/pockets-of-solitude/featured-content"

// This is everything below the header
const HomePage = styled.main`
  margin: 0 auto;
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  /* background: blue; */

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

const Articles = styled.section`
  width: 100%;
  display: grid;
  /* auto-fit is like you decide the number of columns based on the viewport width*/
  /* auto-fit is magic */
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin-top: 2rem;
  grid-gap: 1em;
`

function renderArticlePreviews(articles) {
  // articles is an array of json article objects
  let articlesArray = []; 
  articles.forEach(article => 
    articlesArray.push(<ArticlePreview title={article.node.title} link={article.node.link}/>)
  );
  console.log(articles);
  return articlesArray;
}

const ArticlesGrid = ({ children }) => (
  <StaticQuery
    query={graphql`
      query ArticlesQuery {
        allArticlesJson {
          edges {
            node {
              title
              link
              category
            }
          }
        }
      }
    `}
    render={ (data) => {
      return (
        <Articles>
          {renderArticlePreviews(data.allArticlesJson.edges)}
        </Articles>
      );
    }}
  />
);

export default () => (
  <div>
    <Helmet>
      <title>Nash Vail</title>
    </Helmet>
    <Header />
    <FilterNav />
    <HomePage>
      <Featured link={link} title={title} cover={cover} spoiler={spoiler} />
      <ArticlesGrid/>
      <Footer />
    </HomePage>
  </div>
)
