import React from "react"

// Importing images (assets)
import heroImage from "./assets/bubble.png"

export default () => (
  <section className="hero">
    <div className="text">
      <h1>Pockets of solitude</h1>
    </div>
    <div className="image">
      <img src={heroImage} width="700px" />
    </div> 
  </section>
)
