import React, { useState } from "react";
import API from "../../services/api";
import tatiana from "../../img/tatiana.png";
import mail from "../../img/mail.png";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await API.post("/email/send", formData);

      if (response.status === 200) {
        setSuccess("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setError(response.data.error || "Failed to send message.");
      }
    } catch (error) {
      setError("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className='section-contact' aria-labelledby='contactFormTitle'>
      <h2 id='contactFormTitle' className='visually-hidden'>
        Contact Us
      </h2>
      <form className='form' onSubmit={handleSubmit} aria-label='Contact Form'>
        <figure className='form-picture-box' aria-hidden='true'>
          <span className='small-rectangle'></span>
          <img src={tatiana} alt='Person sitting' className='form-picture' />
        </figure>
        <div className='form-title-box'>
          <img src={mail} alt='Email icon' className='form-mail-icon' />
          <h3 className='form-title heading-secondary'>
            <span>GET IN</span>
            <span className='heading-secondary--bold'>TOUCH</span>
          </h3>
        </div>
        <div className='form__row'>
          <label htmlFor='name' className='form-label'>
            Your Name
          </label>
          <input
            id='name'
            name='name'
            className='form-input'
            placeholder='Type your name here...'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='form__row'>
          <div className='form__column'>
            <label htmlFor='email' className='form-label'>
              Email Address*
            </label>
            <input
              id='email'
              name='email'
              className='form-input'
              type='email'
              placeholder='example@example.com'
              value={formData.email}
              onChange={handleChange}
              autoComplete='email'
            />
          </div>
          <div className='form__column'>
            <label htmlFor='phone' className='form-label'>
              Telephone*
            </label>
            <input
              id='phone'
              name='phone'
              className='form-input'
              type='tel'
              placeholder='( ) _____-____'
              value={formData.phone}
              onChange={handleChange}
              autoComplete='tel'
            />
          </div>
        </div>
        <div className='form__row'>
          <label htmlFor='message' className='form-label'>
            Message*
          </label>
          <textarea
            id='message'
            name='message'
            rows='6'
            cols='50'
            placeholder='Type what you want to say to us'
            value={formData.message}
            onChange={handleChange}
            aria-describedby='messageHelp'
          ></textarea>
          <small id='messageHelp' className='form-text text-muted'>
            Your message should be between 50-500 characters.
          </small>
        </div>
        {error && <p className='error-message'>{error}</p>}
        {success && <p className='success-message'>{success}</p>}
        <div className='form__row'>
          <button type='submit' className='btn btn__main btn__main--full'>
            SEND NOW
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactSection;
