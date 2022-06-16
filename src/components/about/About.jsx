import React from "react"
import "./about.css"
import ME from "../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { FiBook } from "react-icons/fi"
import NTU from "../../assets/ntu.png"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Master's degree</h5>
              <div>
                <img src={NTU} className="about__ntu" />
                <small>National Taiwan University</small>
              </div>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Lead Experience</h5>
              <small>Good at communication</small>
            </article>
            <article className="about__card">
              <FiBook className="about__icon" />
              <h5>Learning</h5>
              <small>Continuous self-improvement</small>
            </article>
          </div>
          <p>
            我是一位跨領域的求職者，原先在商學領域很長一段時間，但自碩班開始接觸程式語言
            (Python)，畢業論文也是利用應用機器學習來跑數據分析，對程式開始有了熱愛，而畢業後原實習公司有職缺需求，故在前公司(普匯金融科技)擔任產品專員一職，在
            2021 / 01 升任產品經理；在 2021 / 07
            因服役關係而離職，在服役期間持續學習前端技能 (HTML / JavaScript /
            React)。
          </p>
          <a href="#contact" className="btn btn-primary">
            Send Me Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
