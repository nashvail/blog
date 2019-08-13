import React from "react"
import { Link } from "gatsby"

import POSHeroImage from './pockets-of-solitude/assets/bubble.png';
import Header from '../components/header'

// Any component defined in src/pages/*.js will automatically become a page huh?! cool

export default () => (
  <div>
    <Header/>
    <section className="newest">
      <img src={POSHeroImage} width="750px" />
    </section>
    <div>Hello world! I missed writing react man</div>
  </div>
)
