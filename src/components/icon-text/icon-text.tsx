import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-common-types";
import styles from "./icon-text.module.css";

interface Props {
  brandIcon?: IconName;
  solidIcon?: IconName;
  text: string;
  href: string;
}

function IconText({ brandIcon, solidIcon, text, href }: Props) {
  return (
    <a className={styles.container} href={href} target="_blank">
      {brandIcon && (
        <FontAwesomeIcon icon={["fab", brandIcon]} className={styles.icon} />
      )}
      {solidIcon && (
        <FontAwesomeIcon icon={solidIcon} className={styles.icon} />
      )}
      <p className={styles.text}>{text}</p>
    </a>
  );
}

export default IconText;
