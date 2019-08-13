import React from "react"
import { Link } from "gatsby"

import "../../utils/global.css"
// You can override page specific things here
import "./styles.css"

import Hero from "./hero"
import Header from '../../components/header';

class PocketsOfSolitude extends React.Component {
  render() {
    return (
      <div>
      <Header/>
      <main>
          <Hero />
        <article>
          <div></div>
          <p>
            <span class="firstcharacter">I</span> love early mornings. The loud
            mating calls of the birds, the smoke from yesterday, all settled on
            the tar and the cold fresh air that I can pull in through my
            nostrils and into my lungs. But really, the best part about mornings
            is fewer people. I love hitting the gym in morning with so few
            people, for one, I don't have to wait for my turn on the treadmill
            or the fact that if I am late than 7 AM someone always takes away
            the 5 pound dumbbells. And because mornings are so precious to me I
            have taught myself to fall asleep early. It required baking in
            certain habits in the last few hours that lead to sleep. For
            example, no junk food, or coffee, or watching or reading something
            that sends my mind into a whirlwind of thoughts. Basically, saying
            no to anything that can potentially induce insomnia.
          </p>
          <p>
            That one night though, it was different. I found myself watching the
            movie "Her", way past my bedtime. Her is one of those Sci-Fi movies
            where technology has progressed to a point where computers have
            started to sound real and even behave real, so real that you can
            fall in love with them. Like, literally, love. Which as much as I
            know is sharing details of your day over text and calls, but anyway.
            So this person, Theodore, in the movie falls in love with his
            computer, which I thought would be weird when it's eventually
            confessed to a friend around halfway through the movie, but instead,
            all his friend asked was ... "Is it (Theodore's relationship with
            his computer) real?" and even though I hoped for a conclusion, the
            whole scene ended with an "I don't know" from both sides. And I was
            stuck.
          </p>
        </article>
      </main>
      </div>
    )
  }
}

export default PocketsOfSolitude

// export default () => (
//   <h1>This is nice right?</h1>
// );
