import React from "react"
import { Link } from "gatsby"

const Navbar = class extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return <h1>Navbar</h1>
  }
}

export default Navbar
