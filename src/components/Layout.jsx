import React from "react"
import Navbar from "./Navbar"

const TemplateWrapper = ({ children }) => (
  <>
    <Navbar />
    <div>{children}</div>
  </>
)

export default TemplateWrapper
