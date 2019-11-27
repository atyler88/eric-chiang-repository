import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }


  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item has-text-weight-semibold is-size-3" title="Logo">
              Home
            </Link>
            <Link className="navbar-item has-text-weight-semibold is-size-3" to="/blog">
                Current Projects
              </Link>
              <Link className="navbar-item has-text-weight-semibold is-size-3" to="/contact">
                Contact
              </Link>
            {/* Hamburger menu */}
            
            <div className="navbar-start has-text-centered">

            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
