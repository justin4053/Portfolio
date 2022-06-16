import React from "react"
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpeg"
import IMG2 from "../../assets/portfolio2.jpg"
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <span>
            <h3>【挖影】WTW</h3>
            <h5>
              {" "}
              是一個看電影、追劇不踩雷的網站， 知名串流平台的劇和電影，
              以及熱映中電影的各種評價資訊。
            </h5>
            <h5>React / NextJS / Redux / Styled Component</h5>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/justin4053/wtw-app-next"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://wtw-app-next.vercel.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </span>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
