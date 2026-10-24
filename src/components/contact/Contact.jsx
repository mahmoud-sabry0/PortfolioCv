
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import"./contact.css"
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
const Contact = () => {
   const form = useRef();
   const [status,setStatus]=useState("")
const sendEmail = (e) => {
    e.preventDefault();
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
      .send('service_r2c1d0p', 'template_o05qu6d', params, { publicKey: 'DnHx-9-X4Qs2kgTz5' })
      .then(() => {
        setStatus("sent")
        form.current.reset()
      })
      .catch((err) => {
        console.error("EmailJS error:", err)
        setStatus("error")
      })
  };
  const contactData=[
    {
      id:1,
      icon:<MdOutlineEmail/>,
      title:"Email",
      info:"mahmoud.sabry.ahmed000@gmail.com",
      link:"mailto:mahmoud.sabry.ahmed000@gmail.com",
    },
     {
      id:2,
      icon:<RiMessengerLine/>,
      title:"Messenger",
      info:"Mahmoud Abn Fadah",
      link:"https://m.me/MahmoudAbnFadah",
    },
    {
      id:3,
      icon:<BsWhatsapp/>,
      title:"Whatsapp",
      info:"01068259431",
      link:"https://wa.me/201068259431",
    },


  ]
  return <>
     <section className="contact" id='contact'>
        <div className="top_section">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
        </div>
<div className='container contact_container'>
<div className='contact_options'>
  {contactData.map(({id,icon,title,info,link})=>
  <article key={id} className='contact_option'>
    {icon}
    <h4>{title}</h4>
    <h5>{info}</h5>
    <a href={link} target='_blank' rel='noopener noreferrer'>Send Message</a>
  </article>
  )}
</div>
<form ref={form} onSubmit={sendEmail} >
<input type='text' placeholder='Full Name' name='name' required/>
<input type='email' placeholder='Your Email' name='email' required/>
<textarea rows={10} placeholder='Enter Your Message' name='message' required></textarea>
<button type='submit' className='btn btn-primary' disabled={status==="sending"}>
  {status==="sending" ? "Sending..." : "Send Message"}
</button>
{status==="sent" && <p className='form_status'>Message sent successfully!</p>}
{status==="error" && <p className='form_status error'>Something went wrong, please try again or reach me on WhatsApp.</p>}
</form>
</div>

      </section>
  </>
}

export default Contact
