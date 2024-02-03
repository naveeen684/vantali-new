import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className={`navbar-navbar ${props.rootClassName} `}>
      <img
        alt="Planical7012"
        src={props.brandingLogo}
        className="navbar-branding-logo"
      />
      <h1 className="navbar-text">
        <span className="">Vantali</span>
        <br className=""></br>
      </h1>
      <div className="navbar-nav-content"></div>
      <div id="mobile-menu" className="navbar-mobile-menu">
        <div className="navbar-branding">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="navbar-image"
          />
          <div id="close-mobile-menu" className="navbar-container">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path
                d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="navbar-nav-links">
          <span className="nav-link">Features</span>
          <span className="nav-link">Why us</span>
          <span className="nav-link">Prices</span>
          <span className="nav-link">Contact</span>
        </div>
        <div className="get-started">
          <span className="navbar-text3">Get started</span>
        </div>
      </div>
      <div className="">
        <div className="navbar-container2">
          <Script
            html={`<script>
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
</script>`}
            className=""
          ></Script>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  imageAlt: 'image',
  imageSrc1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  imageSrc: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  imageAlt1: 'image',
  heading1: 'Heading',
  text: 'Text',
  rootClassName: '',
  heading: 'Heading',
  brandingLogo: '/vantali_logo-200h.png',
}

Navbar.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  brandingLogo: PropTypes.string,
}

export default Navbar
