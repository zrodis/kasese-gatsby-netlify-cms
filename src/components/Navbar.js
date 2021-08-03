import React from 'react'
import { Link } from 'gatsby'
import logoKchef from '../img/logo/KASESE_LOGO.gif'
import logoKchefCropped from '../img/logo/KCHEF-Logo.png'
import { DonateButton } from './DonateButton'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
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
            <div className="has-text-centered navbar-item">
              <DonateButton />
            </div>

            <Link to="/" id="kchef-logo" className="navbar-item" title="Logo">
              <img
                src={logoKchefCropped}
                style={{ maxHeight: '5rem', width: '9rem', height: 'auto' }}
                alt="KCHEF"
              />
            </Link>

            {/* { 
              this.state.navBarActiveClass === '' &&
              <div className={`navbar-end ${this.state.navBarActiveClass}`}>
                <DonateButton anchorProps={{className:"navbar-item"}}/>
              </div>
            } */}
            {/* Hamburger button */}

            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/health">
                Health
              </Link>
              <Link className="navbar-item" to="/education">
                Education
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
