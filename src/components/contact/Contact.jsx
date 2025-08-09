
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import"./contact.css"
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
const Contact = () => {
   const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r2c1d0p', 'template_o05qu6d', form.current,  'DnHx-9-X4Qs2kgTz5',
      )
      e.target.reset()
      
  };
  const contactData=[
    {
      id:1,
      icon:<MdOutlineEmail/>,
      title:"Email",
      info:"mahmoudSabry@gmail.com",
      link:"https://mahmoud.sabry.ahmed000@gmail.com",
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
      link:"https://api.watsapp.com/send?phone=201068259431",
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
    <a href={link} target='_blank'>Send Massage</a>
  </article>
  )}
</div>
<form ref={form} onSubmit={sendEmail} >
<input type='text' placeholder='Full Name' name='name'/>
<input type='email' placeholder='Your Email' name='email'/>
<textarea rows={10} placeholder='Enter Yor Massage' name='message' id=''></textarea>
<button className='btn btn-primary'>Send Message</button>
</form>
</div>
        
      </section>
  </>
}

export default Contact
