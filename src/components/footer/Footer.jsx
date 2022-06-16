import React from "react"
import "./footer.css"
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        JUSTIN
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/profile.php?id=1376482651"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/justin40535310/" target="_blank">
          <FiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Justin Kuo. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
