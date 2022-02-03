import PageContainer from "components/page-container/page-container";
import React from "react";
import styles from "./education.module.css";

function Education() {
  return (
    <PageContainer title="Education">
      <div className={styles.wrap}>
        <div className={styles.imageBox}>
          <img
            alt="KH정보교육원 로고"
            src={process.env.PUBLIC_URL + "/images/kh_logo.jpg"}
            className={styles.image}
          />
        </div>
        <div className={styles.contents}>
          <p className={styles.date}>(2019.11 ~ 2020.06)</p>
          <p>[NCS] UI/UX 스마트 콘텐츠 융합 응용 SW 엔지니어링 양성과정</p>
        </div>
      </div>
      <div className={styles.wrap}>
        <div className={styles.imageBox}>
          <img
            alt="코드스테이츠 로고"
            src={process.env.PUBLIC_URL + "/images/codestates-ci.png"}
            className={styles.image}
          />
        </div>
        <div className={styles.contents}>
          <p className={styles.date}>(2019.07 ~ 2019.09)</p>
          <p>Codestates Pre Course 과정</p>
        </div>
      </div>
    </PageContainer>
  );
}

export default Education;
