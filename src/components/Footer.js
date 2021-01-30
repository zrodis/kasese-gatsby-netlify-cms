import React from 'react'
import { Link } from 'gatsby'
import logoKchefWhite from '../img/logo/kchef_logo_2021_Karla-outline_white.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import { DonateButton } from './DonateButton'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logoKchefWhite}
            alt="KCHEF"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/health">
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/education">
                        Education
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>

              <div className="column is-4">
                <DonateButton
                  buttonProps={{ className: 'is-large button is-white' }}
                />
                <div className="social">
                  <a
                    title="facebook"
                    href="https://www.facebook.com/KaseseCommunityHealthandEducation"
                  >
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <span className="fine-print">{`© ${new Date().getFullYear()} Kasese Community Health and Education Foundation  -  Kasese, Uganda`}</span>
          <div>
            <span className="fine-print">
              {' '}
              <Link style={{ color: 'white' }} to="/aboutthissite">
                {' '}
                About this site
              </Link>
            </span>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
