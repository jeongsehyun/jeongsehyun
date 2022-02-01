import styles from "./skills.module.css";
import PageContainer from "components/page-container/page-container";

function Skills() {
  return (
    <PageContainer title="Skills">
      <div className={styles.category}>
        <h3 className={styles.categoryTitle}>Frontend</h3>
        <div className={styles.skillsBox}>
          <div className={styles.iconBox}>
            <img
              alt="HTML icon"
              className={styles.icon}
              src={process.env.PUBLIC_URL + "/skill-icons/html.png"}
            />
            <p className={styles.skillTitle}>HTML</p>
          </div>
          <div className={styles.iconBox}>
            <img
              alt="CSS icon"
              className={styles.icon}
              src={process.env.PUBLIC_URL + "/skill-icons/css-3.png"}
            />
            <p className={styles.skillTitle}>CSS</p>
          </div>
          <div className={styles.iconBox}>
            <img
              alt="Javascipt icon"
              className={styles.icon}
              src={process.env.PUBLIC_URL + "/skill-icons/js.png"}
            />
            <p className={styles.skillTitle}>Javascipt</p>
          </div>
          <div className={styles.iconBox}>
            <img
              alt="Typescript icon"
              className={styles.icon}
              src={process.env.PUBLIC_URL + "/skill-icons/typescript.png"}
            />
            <p className={styles.skillTitle}>Typescript</p>
          </div>
          <div className={styles.iconBox}>
            <img
              alt="react icon"
              className={styles.icon}
              src={process.env.PUBLIC_URL + "/skill-icons/react.png"}
            />
            <p className={styles.skillTitle}>React</p>
          </div>
          <div className={styles.iconBox}>
            <img
              alt="React Native icon"
              className={styles.icon}
              src={process.env.PUBLIC_URL + "/skill-icons/react.png"}
            />
            <p className={styles.skillTitle}>React Native</p>
          </div>
        </div>
      </div>
      <div className={styles.category}>
        <h3 className={styles.categoryTitle}>Backend</h3>
        <div className={styles.skillsBox}>
          <div className={styles.iconBox}>
            <img
              alt="Java icon"
              className={styles.icon}
              src={process.env.PUBLIC_URL + "/skill-icons/java.png"}
            />
            <p className={styles.skillTitle}>Java</p>
          </div>
        </div>
      </div>
      <div className={styles.category}>
        <h3 className={styles.categoryTitle}>DevOps</h3>
        <div className={styles.skillsBox}>
          <div className={styles.iconBox}>
            <img
              alt="Oracle icon"
              className={styles.icon}
              src={process.env.PUBLIC_URL + "/skill-icons/oracle.png"}
            />
            <p className={styles.skillTitle}>Oracle SQL</p>
          </div>
        </div>
      </div>
      <div className={styles.category}>
        <h3 className={styles.categoryTitle}>Tools</h3>
        <div className={styles.skillsBox}>
          <div className={styles.iconBox}>
            <img
              alt="Git icon"
              className={styles.icon}
              src={process.env.PUBLIC_URL + "/skill-icons/git.png"}
            />
            <p className={styles.skillTitle}>Git</p>
          </div>
          <div className={styles.iconBox}>
            <img
              alt="Slack icon"
              className={styles.icon}
              src={process.env.PUBLIC_URL + "/skill-icons/slack.png"}
            />
            <p className={styles.skillTitle}>Slack</p>
          </div>
          <div className={styles.iconBox}>
            <img
              alt="Microsoft Teams icon"
              className={styles.icon}
              src={process.env.PUBLIC_URL + "/skill-icons/teams.png"}
            />
            <p className={styles.skillTitle}>Microsoft Teams</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Skills;
