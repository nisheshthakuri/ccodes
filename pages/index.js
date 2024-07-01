import Navbar from "../components/navBar";
import Introduction from "../components/introduction";
import TabsInfo from "../components/tabsInfo";
import Overview from "../components/overview";
import Contact from "../components/contact";
import { useEffect,useState, useRef } from "react"
import ScrollToTopButton from "../components/scrollToTopBottom";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add('dark');
      htmlElement.classList.add('dark:bg-slate-800');
      htmlElement.classList.remove('bg-white');
      htmlElement.classList.add('text-white');
     
    } else {
      htmlElement.classList.remove('dark');
      htmlElement.classList.remove('dark:bg-slate-800');
      htmlElement.classList.remove('text-white');
      htmlElement.classList.add('bg-white');
      
    }
  }, [darkMode]);
  const tabs = [
    { id: 1, title: 'Overview', content: <Overview  darkMode={darkMode} setDarkMode={setDarkMode}/> },
    { id: 2, title: 'Contact', content: <Contact  darkMode={darkMode} setDarkMode={setDarkMode}/> },

  ];
  const skillsSectionRef = useRef(null);
  const projectSectionRef = useRef(null);
  const contactSectionRef = useRef(null);



  const scrollToSkills = () => {
    skillsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    projectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="overflow-x-hidden">
    <Navbar scrollToSkills={scrollToSkills} scrollToProjects={scrollToProjects} scrollToContact={scrollToContact} darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>
    <Introduction  darkMode={darkMode} setDarkMode={setDarkMode}/>
    {/* <TabsInfo  tabs={tabs}/>          */}
    <Overview skillsSectionRef={skillsSectionRef} projectSectionRef={projectSectionRef}/>
    <Contact contactSectionRef={contactSectionRef}/>
    <ScrollToTopButton/>
    </div>

  )
}
