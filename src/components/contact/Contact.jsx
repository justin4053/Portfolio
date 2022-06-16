import React, { useRef } from "react"
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_nr6yqr7",
        "template_24k7iht",
        form.current,
        "rpaSqBcI9BtHIasrj"
      )
      .then(
        (result) => {
          alert("Success")
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <section id="contact">
      <h5>In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>justin4053@gmail.com</h5>
            <a href="mailto:justin4053@gmail.com" target="_blank">
              send a message
            </a>
          </article>
          <article className="contact__option">
            <AiFillFacebook className="contact__option-icon" />
            <h4>Facebook</h4>
            <h5>justin4053</h5>
            <a
              href="https://www.facebook.com/profile.php?id=1376482651"
              target="_blank"
            >
              send a message
            </a>
          </article>
          <article className="contact__option">
            <AiFillInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>justin40535310</h5>
            <a href="https://www.instagram.com/justin40535310/" target="_blank">
              send a message
            </a>
          </article>
        </div>
        {/* END OF OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="summit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
