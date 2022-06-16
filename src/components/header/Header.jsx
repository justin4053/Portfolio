import React from "react"
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div>
          <h5>Hello I'm</h5>
          <h1>Justin Kuo</h1>
          <h5 className="text-light">Frontend developer</h5>
          <CTA />
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>

        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header
