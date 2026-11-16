// All portfolio content lives here so it can be updated without touching components.
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiReactquery,
  SiBootstrap,
  SiMui,
  SiAxios,
  SiJest,
  SiTestinglibrary,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { FaCode, FaReact, FaCloudUploadAlt, FaMobileAlt, FaGraduationCap, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { IoLocationOutline, IoLanguageOutline } from "react-icons/io5";
import { BiCodeAlt } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

import freshcart from "./assets/projects/freshcart.jpg";
import movies from "./assets/projects/movies.jpg";
import prayerTimer from "./assets/projects/prayer-timer.jpg";
import mawaqit from "./assets/projects/mawaqit.jpg";
import semiPortfolio from "./assets/projects/semi-portfolio.jpg";
import weather from "./assets/projects/weather.jpg";
import geminiChatbot from "./assets/projects/gemini-chatbot.jpg";
import devfolio from "./assets/projects/devfolio.jpg";
import foody from "./assets/projects/foody.webp";

export const EMAIL = "mahmoud.sabry.ahmed000@gmail.com";
export const PHONE_DISPLAY = "+20 106 825 9431";
export const WHATSAPP_URL = "https://wa.me/201068259431";
export const LINKEDIN_URL = "https://www.linkedin.com/in/mahmoud-sabry";
export const GITHUB_URL = "https://github.com/mahmoud-sabry0";

export const socialLinks = [
  { label: "LinkedIn", href: LINKEDIN_URL, Icon: FaLinkedin },
  { label: "GitHub", href: GITHUB_URL, Icon: FaGithub },
  { label: "WhatsApp", href: WHATSAPP_URL, Icon: BsWhatsapp },
  { label: "Email", href: `mailto:${EMAIL}`, Icon: MdOutlineEmail },
];

export const contactOptions = [
  { title: "Email", info: EMAIL, href: `mailto:${EMAIL}`, Icon: MdOutlineEmail, cta: "Send Email" },
  { title: "LinkedIn", info: "in/mahmoud-sabry", href: LINKEDIN_URL, Icon: FaLinkedin, cta: "Connect" },
  { title: "WhatsApp", info: PHONE_DISPLAY, href: WHATSAPP_URL, Icon: BsWhatsapp, cta: "Send Message" },
];

export const aboutInfo = [
  { title: "Location", info: "Cairo, Egypt", Icon: IoLocationOutline },
  {
    title: "Education",
    info: "Information Systems, Higher Institute for Agricultural Co-operation, Ain Shams University (2021 – 2025)",
    Icon: FaGraduationCap,
  },
  { title: "Main Stack", info: "React.js, JavaScript (ES6+), HTML5, CSS3", Icon: BiCodeAlt },
  { title: "Languages", info: "Arabic (Native), English (Good)", Icon: IoLanguageOutline },
];

export const softSkills = ["Team Player", "Eager to Learn", "Communication Skills"];

export const skills = [
  { title: "HTML5", disc: "Structure", Icon: SiHtml5, color: "#E34F26" },
  { title: "CSS3", disc: "Styling", Icon: SiCss3, color: "#1572B6" },
  { title: "JavaScript", disc: "ES6+", Icon: SiJavascript, color: "#F7DF1E" },
  { title: "React.js", disc: "UI Library", Icon: SiReact, color: "#61DAFB" },
  { title: "React Router", disc: "Routing", Icon: SiReactrouter, color: "#CA4245" },
  { title: "Redux Toolkit", disc: "State Management", Icon: SiRedux, color: "#764ABC" },
  { title: "React Query", disc: "Data Fetching", Icon: SiReactquery, color: "#FF4154" },
  { title: "Bootstrap", disc: "UI Framework", Icon: SiBootstrap, color: "#7952B3" },
  { title: "Material UI", disc: "UI Library", Icon: SiMui, color: "#007FFF" },
  { title: "Axios", disc: "REST APIs", Icon: SiAxios, color: "#8B5CF6" },
  { title: "Jest", disc: "Testing", Icon: SiJest, color: "#C21325" },
  { title: "Testing Library", disc: "Testing", Icon: SiTestinglibrary, color: "#E33332" },
  { title: "Git", disc: "Version Control", Icon: SiGit, color: "#F05032" },
  { title: "GitHub", disc: "Code Hosting", Icon: SiGithub, color: "#fff" },
  { title: "Vercel", disc: "Deployment", Icon: SiVercel, color: "#fff" },
];

export const services = [
  {
    title: "Responsive Web Design",
    disc: "Turning UI/UX designs into pixel-perfect pages that look great on mobile, tablet and desktop, with RTL support.",
    Icon: FaMobileAlt,
  },
  {
    title: "React Web Apps",
    disc: "Building fast single page applications with React, React Router and Redux Toolkit.",
    Icon: FaReact,
  },
  {
    title: "API Integration",
    disc: "Connecting your app to REST APIs with Axios and React Query, with proper loading and error states.",
    Icon: TbApi,
  },
  {
    title: "Fast Performance",
    disc: "Optimized, lightweight websites that load quickly and give users a smooth experience.",
    Icon: IoIosRocket,
  },
  {
    title: "Clean Code",
    disc: "Reusable components and organized code that is easy to read, maintain and scale.",
    Icon: FaCode,
  },
  {
    title: "Deployment",
    disc: "Publishing your project online with GitHub Pages or Vercel so it's ready to share.",
    Icon: FaCloudUploadAlt,
  },
];

export const projects = [
  {
    image: freshcart,
    title: "FreshCart – E-commerce App",
    disc: "Online store with cart & Stripe checkout.",
    tech: ["React", "Redux Toolkit", "React Query", "Bootstrap"],
    github: "https://github.com/mahmoud-sabry0/fresh-cart-app",
    demo: "https://mahmoud-sabry0.github.io/fresh-cart-app/",
  },
  {
    image: movies,
    title: "Movies – Movie Browser App",
    disc: "Browse, search & watch trailers (TMDB API).",
    tech: ["React", "Redux Toolkit", "Axios", "React Bootstrap"],
    github: "https://github.com/mahmoud-sabry0/movies",
    demo: "https://mahmoud-sabry0.github.io/movies/",
  },
  {
    image: prayerTimer,
    title: "Prayer Timer – Live Countdown",
    disc: "Live countdown to the next prayer with city selection (Aladhan API).",
    tech: ["React", "Material UI", "Axios", "Moment.js"],
    github: "https://github.com/mahmoud-sabry0/prayer-timer",
    demo: "https://mahmoud-sabry0.github.io/prayer-timer/",
  },
  {
    image: mawaqit,
    title: "Mawaqit – Prayer Times App",
    disc: "Live prayer times & Hijri date (Aladhan API).",
    tech: ["React", "Axios", "REST API", "Jest"],
    github: "https://github.com/mahmoud-sabry0/prayer-times",
    demo: "https://mahmoud-sabry0.github.io/prayer-times/",
  },
  {
    image: geminiChatbot,
    title: "Gemini Chatbot – AI Chat App",
    disc: "AI chat with streaming responses & file upload.",
    tech: ["JavaScript", "Gemini API", "Vercel"],
    github: "https://github.com/mahmoud-sabry0/gemini-chatbot",
    demo: "https://gemini-chatbot-rouge-five.vercel.app/",
  },
  {
    image: weather,
    title: "Weather Forecast App",
    disc: "Weather forecast with city search & geolocation (WeatherAPI).",
    tech: ["JavaScript", "Fetch", "Bootstrap 5"],
    github: "https://github.com/mahmoud-sabry0/weather-app",
    demo: "https://mahmoud-sabry0.github.io/weather-app/",
  },
  {
    image: foody,
    title: "Foody – Recipe Finder App",
    disc: "Recipe search & filters (TheMealDB).",
    tech: ["HTML", "CSS", "JavaScript", "Fetch API"],
    github: "https://github.com/mahmoud-sabry0/foody",
    demo: "https://mahmoud-sabry0.github.io/foody/",
  },
  {
    image: semiPortfolio,
    title: "Semi-Portfolio",
    disc: "Portfolio with project filters and dark mode.",
    tech: ["React", "Reactstrap", "CSS"],
    github: "https://github.com/mahmoud-sabry0/semi-portfolio",
    demo: "https://mahmoud-sabry0.github.io/semi-portfolio/",
  },
  {
    image: devfolio,
    title: "DevFolio – Personal Portfolio",
    disc: "Responsive portfolio website.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
    github: "https://github.com/mahmoud-sabry0/DevFolio",
    demo: "https://mahmoud-sabry0.github.io/DevFolio/",
  },
];
