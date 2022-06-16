import React from "react"
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { BsFacebook } from "react-icons/bs"
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/justin-kuo-229b411a1/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/justin4053" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=1376482651"
        target="_blank"
      >
        <BsFacebook />
      </a>
    </div>
  )
}

export default HeaderSocials
