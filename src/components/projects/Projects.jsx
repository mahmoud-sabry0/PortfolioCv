import "./projects.css"
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";
const Projects = () => {
  const portfolioData = [
    {
      id: 1,
      image: img1,
      title: "portfolio  Item 1",
      github: "",
      demo: "",
    },
    {
      id: 2,
      image: img2,
      title: "portfolio  Item 2",
      github: "",
      demo: "",
    },
    {
      id: 3,
      image: img3,
      title: "portfolio  Item 3",
      github: "",
      demo: "",
    },
    {
      id: 4,
      image: img4,
      title: "portfolio  Item 4",
      github: "",
      demo: "",
    },
    {
      id: 5,
      image: img5,
      title: "portfolio  Item 5",
      github: "",
      demo: "",
    },
    {
      id: 6,
      image: img6,
      title: "portfolio  Item 6",
      github: "",
      demo: "",
    },
  ];
  return (
    <>
      <section className="projects" id="projects">
        <div className="top_section">
          <h5>My Recent Wark</h5>
          <h2>Portfolio</h2>
        </div>
        <div className="container projects_container">
          {portfolioData.map(({ id, image, title ,github,demo}) => (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_img">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_btn">
                <a target="_blank" href={github} className="btn">
                  Github
                </a>
                <a target="_blank" href={demo} className="btn btn-primary">
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
