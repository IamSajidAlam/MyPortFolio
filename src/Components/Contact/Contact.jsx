import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cypqhuq",
        "template_dn89z3b",
        form.current,
        "RuIO8dbEuw61qQQaN"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.reset();
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="Contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="s-left">
          {/* darkMode */}
          <span >Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;