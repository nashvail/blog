import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Constants
import Constants from '../../utils/Constants';

// Assets
import "../../utils/global.css"
import "./styles.css"
import heroImage from "./assets/bubble.png"

// Components
import Header from "../../components/header"

// Styled components
const Container = styled.main`
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* grid-template-rows: 800px auto; */
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 1000px;
  }
`;

const Article = styled.article`
  /* grid-row-start: 2; */
  /* grid-row-end: 3; */
  /* Column */
  grid-column: span 8;
  margin-top: -250px;

  @media screen and (max-width: 1200px) {
    margin-top: 0px;
    grid-column-start: 3;
    grid-column-end: 11;
  }
`;

class PocketsOfSolitude extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Hero />
          <Article>
            <div></div>
            <p>
              <span class="firstcharacter">I</span> love early mornings. The
              loud mating calls of the birds, the smoke from yesterday, all
              settled on the tar and the cold fresh air that I can pull in
              through my nostrils and into my lungs. But really, the best part
              about mornings is fewer people. I love hitting the gym in morning
              with so few people, for one, I don't have to wait for my turn on
              the treadmill or the fact that if I am late than 7 AM someone
              always takes away the 5 pound dumbbells. And because mornings are
              so precious to me I have taught myself to fall asleep early. It
              required baking in certain habits in the last few hours that lead
              to sleep. For example, no junk food, or coffee, or watching or
              reading something that sends my mind into a whirlwind of thoughts.
              Basically, saying no to anything that can potentially induce
              insomnia.
            </p>
            <p>
              That one night though, it was different. I found myself watching
              the movie "Her", way past my bedtime. Her is one of those Sci-Fi
              movies where technology has progressed to a point where computers
              have started to sound real and even behave real, so real that you
              can fall in love with them. Like, literally, love. Which as much
              as I know is sharing details of your day over text and calls, but
              anyway. So this person, Theodore, in the movie falls in love with
              his computer, which I thought would be weird when it's eventually
              confessed to a friend around halfway through the movie, but
              instead, all his friend asked was ... "Is it (Theodore's
              relationship with his computer) real?" and even though I hoped for
              a conclusion, the whole scene ended with an "I don't know" from
              both sides. And I was stuck.
            </p>
            <p>
              My brain--Isn't it just great to blame your brain for the shit you
              do--picked this up and started questioning everything digital,
              everything that doesn't exist outside of a screen, and then, it
              was 2 AM. My plans of waking up at 5:30 was obliterated of course,
              along with it died the pride I take in my work.
            </p>
            <p>
              A good part of the population and yes, me and even you spend hours
              creating things that only exist as flickering lights on a thin
              glass slab. I am talking about apps and games and all the other
              things that we use on our little phones and tablets and laptops.
              The smartest minds today come together each morning and
              essentially discuss how the pixels on the screens of their users
              are going to glow, and how they can hook the users to keep looking
              at those meaningless flickering lights. What these people build,
              or you build and I build is digital, with no tangible real
              existence and when I think of things this way, everything seems a
              little synthetic. It’s as if I go back to a time before technology
              and show the people of past a piece of software on an iPad that my
              team built, and these people who are seeing either sow seeds or
              build real things, like buildings and vases, castles and pyramids.
              I am afraid that one of them is going to look into the screen and
              question, “is it real?” And I am afraid I won’t have an instant
              answer to puke out and our conversation will quickly turn into an
              argument of me insisting YES, mostly just to save my pride.
            </p>
          </Article>
        </Container>
      </div>
    )
  }
}

const Hero = () => (
  <section className="hero">
    <div className="text">
      <span className="publish-date">August 15, 2019</span>
      <span className="hero-text-1">Pockets of</span>
      <span className="hero-text-2">Solitude</span>
    </div>
    <div className="image">
      <img src={heroImage} />
    </div>
  </section>
)

export default PocketsOfSolitude
