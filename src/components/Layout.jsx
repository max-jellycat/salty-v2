import React from "react"
import Navbar from "./Navbar"

import "../index.scss"

const TemplateWrapper = ({ children }) => (
  <div className="columns">
    <div className="column is-3">
      <Navbar />
    </div>
    <div className="column is-9">{children}</div>
  </div>
)

export default TemplateWrapper
