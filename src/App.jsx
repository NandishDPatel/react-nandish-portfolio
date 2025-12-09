import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import CurricularActivities from "./components/CurricularActivities";
// import NonTechnicalProjects from './components/NonTechnicalProjects'
import MiniProjects from "./components/MiniProjects";
// import Certifications from './components/Certifications';
// import CourseCertifications from './components/CourseCertifications'
import { useRef } from "react";

const App = () => {
  const refs = {
    education: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    aboutme: useRef(null),
    technologies: useRef(null),
    activities: useRef(null),
    contact: useRef(null),
    miniprojects: useRef(null),
  };

  const scrollToSection = (section) => {
    const ref = refs[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-6">
        <Navbar scrollToSection={scrollToSection} refs={refs} />
        <Hero />
        {/* <div ref={refs.experience}>
          <Experience />
        </div> */}
        <div ref={refs.education}>
          <Education />
        </div>
        <div ref={refs.projects}>
          <Projects />
        </div>
        <div ref={refs.activities}>
          <CurricularActivities />
        </div>
        <div ref={refs.technologies}>
          <Technologies />
        </div>
        <div ref={refs.aboutme}>
          <About />
        </div>
        {/* <div ref={refs.miniprojects}><MiniProjects/></div> */}
        {/* <Certifications/> */}
        {/* <CourseCertifications/> */}
        {/* <NonTechnicalProjects/> */}
        <div ref={refs.contact}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
