import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Header from './components/Header';
import Footer from './components/Footer';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_b3abzxk', 'template_8x29rwe', e.target, 'user_JcgUYqsRIelRxsHQ2HFaM').then(
      (result) => {
        setFormSent(true);
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  const [formSent, setFormSent] = useState(false);
  const form = (
    <form className="contact-form" onSubmit={sendEmail}>
      <div className="form-row">
        <input type="hidden" name="contact_number" />
        <div className="form-label">
          <label>Name</label>
        </div>
        <input type="text" name="user_name" required />
      </div>
      <div className="form-row">
        <div className="form-label">
          <label>Email</label>
        </div>
        <input type="email" name="user_email" required />
      </div>
      <div className="form-row">
        <div className="form-label">
          <label>Message</label>
        </div>
        <textarea name="message" />
      </div>
      <div>
        <input id="send-btn" type="submit" value="Send Message" required />
      </div>
    </form>
  );

  const msg = <div class="sent-msg">Thank you! Your form has been sent.</div>;

  return (
    <div className="container">
      <Header />
      <h1>Contact Us</h1>
      <div className="content-container">{formSent ? msg : form}</div>
      <Footer />
    </div>
  );
}
