import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  // Email JS Credentials //npm i emailjs-com --save
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w9p172e",
        "template_47m0e6s",
        form.current,
        "5ub4n8s21UQo_LOHU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset()
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>iburaksag@gmail.com</h5>
            <a href="mailto:iburaksag@gmail.com" target="_blank">
              Send Email
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>Burak Sag</h5>
            <a href="https://www.instagram.com/iburaksag/" target="_blank">
              Direct Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+353892703029</h5>
            <a href="https://wa.me/353892703029" target="_blank">
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
