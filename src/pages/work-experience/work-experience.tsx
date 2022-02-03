import PageContainer from "components/page-container/page-container";
import React from "react";
import styles from "./work-experience.module.css";

function WorkExperience() {
  return (
    <PageContainer title="WorkExperience">
      <div className={styles.wrap}>
        <div className={styles.company}>
          <h2 className={styles.companyName}>Radiuslab</h2>
          <p className={styles.date}>(2020.08 ~ 2021.10)</p>
        </div>
        <div className={styles.contents}>
          <p>커뮤니티 차량공유 서비스 WeGooli 앱 개발/배포</p>
          <ul className={styles.list}>
            <li>React Native</li>
            <li>예약, 결제, 마이페이지 화면 및 기능 구현</li>
          </ul>
        </div>
      </div>
    </PageContainer>
  );
}

export default WorkExperience;
