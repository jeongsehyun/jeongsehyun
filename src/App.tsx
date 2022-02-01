import { useState, useEffect } from "react";
import styles from "./app.module.css";
import Profile from "components/profile/profile";
import Introduction from "pages/introduction/introduction";
import Skills from "pages/skills/skills";
import WorkExperience from "pages/work-experience/work-experience";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import Navigation from "./components/navigation/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  // solid icon
  faPhone,
  faEnvelope,
  faHouseUser,
  faSmile,
  faSmileWink,
  faTools,
  faBuilding,
  faLaptopCode,
  faGraduationCap,
  faChevronDown,
  faChevronUp,
  // brand icon
  faGithub
);

type PageName =
  | "Introduction"
  | "Skills"
  | "Portfolio"
  | "WorkExperience"
  | "Education";

function App() {
  const [downButtonVisible, setDownButtonVisible] = useState<boolean>(false);
  const [hasVerticalScrollbar, setHasVerticalScrollbar] =
    useState<boolean>(false);
  const [selectedPage, setSelectedPage] = useState<PageName>("Introduction");
  const selectPage = (pageName: PageName): undefined => {
    setSelectedPage(pageName);
    return undefined;
  };

  const scrollToTop = () => {
    const contents = document.getElementById("contents");
    if (contents !== null) {
      contents.scrollTo(0, 0);
    }
  };

  const scrollListener = (event: React.UIEvent<HTMLDivElement>) => {
    const containerHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;
    const scrollTop = event.currentTarget.scrollTop;
    if (containerHeight + scrollTop >= scrollHeight)
      setDownButtonVisible(false);
    else setDownButtonVisible(true);
  };

  useEffect(() => {
    const contents = document.getElementById("contents");
    const pageSection = document.getElementById("pageSection");
    if (contents !== null && pageSection !== null) {
      if (contents.clientHeight < pageSection.clientHeight) {
        setHasVerticalScrollbar(true);
        setDownButtonVisible(true);
      } else {
        setHasVerticalScrollbar(false);
        setDownButtonVisible(false);
      }
    }
  }, [selectedPage]);

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        <div
          id="contents"
          className={styles.contents}
          onScroll={scrollListener}
        >
          <Profile />
          <section id="pageSection" className={styles.pages}>
            <Navigation selectedPage={selectedPage} onClick={selectPage} />
            {selectedPage === "Introduction" && <Introduction />}
            {selectedPage === "Skills" && <Skills />}
            {/* <WorkExperience /> */}
            {downButtonVisible && (
              <div className={styles.scrollIndicationBox}>
                <div className={styles.scrollIndication}>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={styles.downIcon}
                  />
                </div>
              </div>
            )}
            {hasVerticalScrollbar && !downButtonVisible && (
              <div className={styles.scrollIndicationBox}>
                <button
                  className={styles.scrollTopButton}
                  onClick={scrollToTop}
                >
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className={styles.topIcon}
                  />
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
