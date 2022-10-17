import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef as UseRef } from "react";
import emailjs from "emailjs-com";

const contact = () => {
  const form = UseRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5klmq4n",
        "template_wncjwps",
        form.current,
        "OVDYhtEfzmSftmZbi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact me</h2>
      <h5>Hire me or send me good wishes</h5>

      <div className="container contact__container">
        <div className="contact__options text-white">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rashid.webengg@gmail.com</h5>
            <a href="mailto:rashid.webengg@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Rashid</h5>
            <a href="https://www.facebook.com/messages/t/2034345306688960/">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon " />
            <h4>WhatsApp</h4>
            <h5>+8801733-290379</h5>
            <a href="https://api.whatsapp.com/send?phone=+8801733290379">
              Send a message
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
          <input type="subject" name="subject" placeholder="Subject" required />
          <textarea
            name="massage"
            rows="7"
            placeholder="Your massage"
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

export default contact;
