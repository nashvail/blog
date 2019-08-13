import React from "react"

// Subcomps
import Header from "../../components/header"

// Importing images (assets)
import heroImage from "./assets/bubble.png"

class HeroImage extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="text">
          <span className="publish-date">August 15, 2019</span>
          <span className="hero-text-1">Pockets of</span>
          <span className="hero-text-2">Solitude</span>
        </div>
        <div className="image">
          <img src={heroImage} width="750px" />
        </div>
      </section>
    )
  }
}

export default HeroImage
