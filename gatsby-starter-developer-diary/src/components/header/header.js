import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import MobileSocialLinks from "./MobileSocialLinks"
import SocialLinks from "./SocialLinks"
import MobileBio from "./MobileBio"
import "./header.css"

const Header = ({ siteTitle, tagline, author, contacts }) => {
  //máquina de escrever
  function typeWrite(elemento) {
    const textoArray = elemento.split("")
    textoArray.forEach(function(letra, i) {
      setTimeout(function() {
        document.getElementById("headTitle").innerHTML += letra 
      }, 100 * i)
    })
  }

  typeWrite(siteTitle)

  return (
    <header
      className="head-main"
      style={{
        background: `#424242`,
      }}
    >
      <div
        className="head-elements"
        style={{
          margin: `0`,
          padding: `.75rem`,
        }}
      >
        <h1 id="headTitle" className="head-logo ml-4" style={{ margin: 0 }}>
        </h1>
        <SocialLinks contacts={contacts} />
      </div>
      <MobileSocialLinks contacts={contacts} />
      <MobileBio author={author} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
