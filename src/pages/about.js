import React from "react";
import { Link } from "gatsby";

// Custom components
import Header from '../components/Header';

export default () => (
  <div>
    <Header/>
    <Link to="/">Home</Link>
    <h1>About Gatsby js</h1>
  </div>
)