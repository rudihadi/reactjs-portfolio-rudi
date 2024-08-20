import "../styles/About.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiPhp, SiCodeigniter } from "react-icons/si";

function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, porro!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos fugit culpa enim rerum! Quaerat sed quo consequatur nostrum molestiae velit iusto facilis ullam fugit, possimus corrupti? Quos a porro laboriosam!</p>
        <h4>Programming language & Tools</h4>
        <div className="skills">
          <FaHtml5 />
          <FaCss3Alt />
          <FaJsSquare />
          <SiPhp />
          <FaBootstrap />
          <FaGithub />
          <SiCodeigniter />
        </div>
      </div>
    </section>
  );
}

export default About;
