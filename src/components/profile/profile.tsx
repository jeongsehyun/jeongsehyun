import IconText from "components/icon-text/icon-text";
import styles from "./profile.module.css";

function Profile() {
  return (
    <aside className={styles.container}>
      <div className={styles.imageBox}>
        <img
          className={styles.image}
          alt="profile image"
          src={process.env.PUBLIC_URL + "/images/profile_image.png"}
        />
      </div>
      <div className={styles.contents}>
        <IconText
          solidIcon="phone"
          text="010-2993-3942"
          href="tel:010-2993-3942"
        />
        <IconText
          solidIcon="envelope"
          text="sehyun.dev@gmail.com"
          href="mailto:sehyun.dev@gmail.com"
        />
        <IconText
          brandIcon="github"
          text="https://github.com/jeongsehyun"
          href="https://github.com/jeongsehyun"
        />
        <IconText
          solidIcon="house-user"
          text="https://211129.tistory.com/"
          href="https://211129.tistory.com/"
        />
      </div>
    </aside>
  );
}

export default Profile;
