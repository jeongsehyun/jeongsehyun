import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./navigation.module.css";

type PageName =
  | "Introduction"
  | "Skills"
  | "Portfolio"
  | "WorkExperience"
  | "Education";
interface Props {
  selectedPage: string;
  onClick: (pageName: PageName) => undefined;
}

function Navigation({ selectedPage, onClick }: Props) {
  return (
    <nav className={styles.container}>
      <button
        className={`${styles.categoryBox} ${
          selectedPage === "Introduction" && styles.selectedCategoryBox
        }`}
        onClick={() => onClick("Introduction")}
      >
        <FontAwesomeIcon className={styles.icon} icon="smile" />
        <p className={styles.category}>Introduction</p>
      </button>
      <button
        className={`${styles.categoryBox} ${
          selectedPage === "Skills" && styles.selectedCategoryBox
        }`}
        onClick={() => onClick("Skills")}
      >
        <FontAwesomeIcon className={styles.icon} icon="tools" />
        <p className={styles.category}>Skills</p>
      </button>
      {/* <button
        className={`${styles.categoryBox} ${
          selectedPage === "Portfolio" && styles.selectedCategoryBox
        }`}
        onClick={() => onClick("Portfolio")}
      >
        <FontAwesomeIcon className={styles.icon} icon="laptop-code" />
        <p className={styles.category}>Portfolio</p>
      </button> */}
      <button
        className={`${styles.categoryBox} ${
          selectedPage === "WorkExperience" && styles.selectedCategoryBox
        }`}
        onClick={() => onClick("WorkExperience")}
      >
        <FontAwesomeIcon className={styles.icon} icon="building" />
        <p className={styles.category}>Work Experience</p>
      </button>
      <button
        className={`${styles.categoryBox} ${
          selectedPage === "Education" && styles.selectedCategoryBox
        }`}
        onClick={() => onClick("Education")}
      >
        <FontAwesomeIcon className={styles.icon} icon="graduation-cap" />
        <p className={styles.category}>Education</p>
      </button>
    </nav>
  );
}

export default Navigation;
