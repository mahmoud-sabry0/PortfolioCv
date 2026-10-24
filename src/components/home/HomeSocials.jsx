
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import "./home.css"
const HomeSocials = () => {
  return<>
    <div className='home_Socials'>
      <a href='https://m.me/MahmoudAbnFadah' target="_blank" rel="noopener noreferrer" aria-label="Messenger" title="Messenger"><RiMessengerLine/></a>
      <a href='https://wa.me/201068259431' target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp"><BsWhatsapp/></a>
      <a href='mailto:mahmoud.sabry.ahmed000@gmail.com' aria-label="Email" title="Email"><MdOutlineEmail/></a>

    </div>
    </>

}

export default HomeSocials
