import { useState, useRef } from "react";
import styles from "./app.module.css";
import Profile from "./components/profile/profile";
import Intro from "./pages/intro/intro";
import Skills from "./pages/skills/skills";
import WorkExperience from "./pages/work-experience/work-experience";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faHouseUser,
  faSmile,
  faSmileWink,
  faTools,
  faBuilding,
  faLaptopCode,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import Navigation from "./components/navigation/navigation";
import { useEffect } from "react";

library.add(
  faPhone,
  faEnvelope,
  faHouseUser,
  faSmile,
  faSmileWink,
  faGithub,
  faTools,
  faBuilding,
  faLaptopCode,
  faGraduationCap
);

type PageName =
  | "Introduction"
  | "Skills"
  | "Portfolio"
  | "WorkExperience"
  | "Education";

function App() {
  const [scrollIndication, setScrollIndication] = useState<boolean>(false);
  const [selectedPage, setSelectedPage] = useState<PageName>("Introduction");
  const selectPage = (pageName: PageName): undefined => {
    setSelectedPage(pageName);
    console.log(pageName);
    return undefined;
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const contentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = containerRef;
    const { current: contentsCurrent } = contentsRef;
    if (current !== null && contentsCurrent !== null) {
      const containerHeight = current.clientHeight;
      const contentsHeight = contentsCurrent.clientHeight + 40;
      if (containerHeight < contentsHeight) setScrollIndication(true);
      console.log("? ", containerHeight, "...");
      console.log("? ", contentsHeight, "...");
      console.log("? ", containerHeight < contentsHeight);
    }
  }, []);

  return (
    <div className={styles.app}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.head}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        <div ref={contentsRef} className={styles.contents}>
          <Profile />
          <div className={styles.pages}>
            <Navigation selectedPage={selectedPage} onClick={selectPage} />
            <Intro />
            {/* <Skills />
            <WorkExperience /> */}
          </div>
        </div>
        {scrollIndication && <div className={styles.scrollIndication}></div>}
      </div>
    </div>
  );
}

export default App;
