import "./projects.css"
import freshcart from "../../assets/projects/freshcart.jpg";
import movies from "../../assets/projects/movies.jpg";
import prayerTimer from "../../assets/projects/prayer-timer.jpg";
import mawaqit from "../../assets/projects/mawaqit.jpg";
import semiPortfolio from "../../assets/projects/semi-portfolio.jpg";
import weather from "../../assets/projects/weather.jpg";
import geminiChatbot from "../../assets/projects/gemini-chatbot.jpg";
import devfolio from "../../assets/projects/devfolio.jpg";
import foody from "../../assets/projects/foody.jpg";
const Projects = () => {
  const portfolioData = [
    {
      id: 1,
      image: freshcart,
      title: "FreshCart – E-commerce App",
      disc: "Online store with cart & Stripe checkout.",
      tech: ["React", "Redux Toolkit", "React Query", "Bootstrap"],
      github: "https://github.com/mahmoud-sabry0/fresh-cart-app",
      demo: "https://mahmoud-sabry0.github.io/fresh-cart-app/",
    },
    {
      id: 2,
      image: movies,
      title: "Movies – Movie Browser App",
      disc: "Browse, search & watch trailers (TMDB API).",
      tech: ["React", "Redux Toolkit", "Axios", "React Bootstrap"],
      github: "https://github.com/mahmoud-sabry0/movies",
      demo: "https://mahmoud-sabry0.github.io/movies/",
    },
    {
      id: 3,
      image: prayerTimer,
      title: "Prayer Timer – Live Countdown",
      disc: "Live countdown to the next prayer with city selection (Aladhan API).",
      tech: ["React", "Material UI", "Axios", "Moment.js"],
      github: "https://github.com/mahmoud-sabry0/prayer-timer",
      demo: "https://mahmoud-sabry0.github.io/prayer-timer/",
    },
    {
      id: 4,
      image: mawaqit,
      title: "Mawaqit – Prayer Times App",
      disc: "Live prayer times & Hijri date (Aladhan API).",
      tech: ["React", "Axios", "REST API", "Jest"],
      github: "https://github.com/mahmoud-sabry0/prayer-times",
      demo: "https://mahmoud-sabry0.github.io/prayer-times/",
    },
    {
      id: 5,
      image: semiPortfolio,
      title: "Semi-Portfolio",
      disc: "Portfolio with project filters and dark mode.",
      tech: ["React", "Reactstrap", "CSS"],
      github: "https://github.com/mahmoud-sabry0/semi-portfolio",
      demo: "https://mahmoud-sabry0.github.io/semi-portfolio/",
    },
    {
      id: 6,
      image: weather,
      title: "Weather Forecast App",
      disc: "Weather forecast with city search & geolocation (WeatherAPI).",
      tech: ["JavaScript", "Fetch", "Bootstrap 5"],
      github: "https://github.com/mahmoud-sabry0/weather-app",
      demo: "https://mahmoud-sabry0.github.io/weather-app/",
    },
    {
      id: 7,
      image: geminiChatbot,
      title: "Gemini Chatbot – AI Chat App",
      disc: "AI chat with streaming responses & file upload.",
      tech: ["JavaScript", "Gemini API", "Vercel"],
      github: "https://github.com/mahmoud-sabry0/gemini-chatbot",
      demo: "https://gemini-chatbot-rouge-five.vercel.app/",
    },
    {
      id: 8,
      image: devfolio,
      title: "DevFolio – Personal Portfolio",
      disc: "Responsive portfolio website.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
      github: "https://github.com/mahmoud-sabry0/DevFolio",
      demo: "https://mahmoud-sabry0.github.io/DevFolio/",
    },
    {
      id: 9,
      image: foody,
      title: "Foody – Recipe Finder App",
      disc: "Recipe search & filters (TheMealDB).",
      tech: ["HTML", "CSS", "JavaScript", "Fetch API"],
      github: "https://github.com/mahmoud-sabry0/foody",
      demo: "https://mahmoud-sabry0.github.io/foody/",
    },
  ];
  return (
    <>
      <section className="projects" id="projects">
        <div className="top_section">
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
        </div>
        <div className="container projects_container">
          {portfolioData.map(({ id, image, title, disc, tech, github, demo }) => (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_img">
                <img src={image} alt={title} loading="lazy" />
              </div>
              <h3>{title}</h3>
              <p className="text-light">{disc}</p>
              <div className="portfolio_item_tech">
                {tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="portfolio_item_btn">
                <a target="_blank" rel="noopener noreferrer" href={github} className="btn">
                  Github
                </a>
                <a target="_blank" rel="noopener noreferrer" href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
