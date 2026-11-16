import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { contactOptions } from '../../data'
import "./contact.css"

// EmailJS IDs are public client keys by design. Restrict allowed origins in the EmailJS dashboard.
const EMAILJS_SERVICE_ID = 'service_r2c1d0p'
const EMAILJS_TEMPLATE_ID = 'template_o05qu6d'
const EMAILJS_PUBLIC_KEY = 'DnHx-9-X4Qs2kgTz5'

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus("sending")

    const { name, email, message } = Object.fromEntries(new FormData(form.current))
    // send the same values under the common EmailJS variable names so any template works
    const params = {
      name, email, message,
      from_name: name, user_name: name,
      from_email: email, user_email: email, reply_to: email,
      to_name: "Mahmoud Sabry",
    }

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, { publicKey: EMAILJS_PUBLIC_KEY })
      .then(() => {
        setStatus("sent")
        form.current.reset()
      })
      .catch((err) => {
        console.error("EmailJS error:", err)
        setStatus("error")
      })
  }

  return (
    <section className="contact" id='contact'>
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className='container contact_container'>
        <div className='contact_options'>
          {contactOptions.map(({ title, info, href, Icon, cta }) => (
            <article key={title} className='contact_option'>
              <Icon aria-hidden="true" />
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a
                href={href}
                {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
              >
                {cta}
              </a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor='contact-name' className='visually-hidden'>Full Name</label>
          <input id='contact-name' type='text' placeholder='Full Name' name='name' autoComplete='name' required />
          <label htmlFor='contact-email' className='visually-hidden'>Your Email</label>
          <input id='contact-email' type='email' placeholder='Your Email' name='email' autoComplete='email' required />
          <label htmlFor='contact-message' className='visually-hidden'>Your Message</label>
          <textarea id='contact-message' rows={10} placeholder='Enter Your Message' name='message' required></textarea>
          <button type='submit' className='btn btn-primary' disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          <div aria-live='polite'>
            {status === "sent" && <p className='form_status'>Message sent successfully!</p>}
            {status === "error" && <p className='form_status error'>Something went wrong, please try again or reach me on WhatsApp.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
