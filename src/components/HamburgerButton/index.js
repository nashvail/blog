import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

// Import Jonathan Suh's hamburger CSS
import "./hamburgers.css"

export default function HamburgerButton({ type, active, ...props }) {
  const classNames = classnames("hamburger", `hamburger--${type}`, {
    "is-active": active,
  })

  return (
    <button type="button" className={classNames} {...props}>
      <span className="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  )
}

HamburgerButton.propTypes = {
  type: PropTypes.oneOf([
    "slider",
    "slider-r",
    "squeze",
    "arrow",
    "arrowalt",
    "3dx",
    "3dx-r",
    "boring",
    "collapse",
    "collapse-r",
    "vortex",
    "vortex-r",
    "spring",
    "spring-r",
    "spin",
    "spin-r",
    "stand",
    "stand-r",
    "minus",
    "emphatic",
    "emphatic-r",
    "elastic",
    "3dxy",
    "3dxy-r"
  ]),
  active: PropTypes.bool.isRequired,
}
