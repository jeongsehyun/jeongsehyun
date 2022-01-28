import styles from "./page-container.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function PageContainer({ children }: Props): JSX.Element {
  return <div className={styles.container}>{children}</div>;
}

export default PageContainer;
