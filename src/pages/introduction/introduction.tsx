import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import PageContainer from "components/page-container/page-container";
import styles from "./introduction.module.css";
import FrontendDeveloper from "assets/lottie/frontend-developer.json";

function Introduction() {
  const lottieAnimationRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const { current } = lottieAnimationRef;
    let mounted = true;
    if (current) {
      lottie.loadAnimation({
        container: current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: FrontendDeveloper,
        rendererSettings: {
          progressiveLoad: false,
        },
      });
    }
    return function cleanup() {
      mounted = false;
    };
  }, []);
  return (
    <PageContainer title="Introduction">
      <div ref={lottieAnimationRef} className={styles.lottieAnimation}></div>
      <div className={styles.subTitleBox}>
        <h2 className={styles.subTitle}>1px의 차이를 아는</h2>
        <h2 className={styles.subTitle}>프론트엔드 개발자</h2>
      </div>
      <div className={styles.contents}>
        <p>
          안녕하세요😃
          <br />
          1년 차 새싹 프론트엔드 개발자 정세현입니다.
          <br /> <strong>'멈춰있지 말자'</strong>는 좌우명에 따라 웹
          디자이너에서 개발자로 새로운 도전을 시작하여 한 걸음씩 성장하고
          있습니다.
          <br /> <strong>소통과 공감</strong>을 잊지 않는{" "}
          <strong>선한 영향력을 가진 개발자</strong>가 되는 것이 목표입니다.
        </p>
      </div>
      <ul className={styles.tmiBox}>
        <p className={styles.tmi}>TMI</p>
        <li>
          사회생활에서 중요하게 생각하는 단어는 <strong>존중</strong>과{" "}
          <strong>책임감</strong>입니다.
        </li>
        <li>최근 명상을 배우고 있습니다.</li>
        <li>좋아하는 색은 회색입니다.</li>
      </ul>
    </PageContainer>
  );
}

export default Introduction;
