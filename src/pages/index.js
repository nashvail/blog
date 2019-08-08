import React from "react"
import { Link } from "gatsby"

// Any component defined in src/pages/*.js will automatically become a page huh?! cool

export default () => (
  <div>
    <Link to="/about/">About</Link>
    <div>Hello world! I missed writing react man</div>
  </div>
)
