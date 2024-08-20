import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { DiCodeigniter, DiReact } from "react-icons/di";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop";

function Experience() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2024 - Present" iconStyle={{ background: "#222831", color: "#fff" }} icon={<DiReact />}>
            <h3 className="vertical-timeline-element-title">Junior Programmer</h3>
            <h4 className="vertical-timeline-element-subtitle">PT. Sumatera Timber Indo Industry</h4>
            <p>Merubah Web yang menggunakan Codeigniter 3 ke React JS</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2023 - 2024" iconStyle={{ background: "#222831", color: "#fff" }} icon={<DiCodeigniter />}>
            <h3 className="vertical-timeline-element-title">Junior Programmer</h3>
            <h4 className="vertical-timeline-element-subtitle">PT. Sumatera Timber Indo Industry</h4>
            <p>Maintenance dan pengembangan semua Web Perusahaan yang menggunakan Codeigniter 3</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
