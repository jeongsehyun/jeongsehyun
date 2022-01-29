import styles from "./page-container.module.css";

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
}

function PageContainer({ title, children }: Props): JSX.Element {
  return (
    <article className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.contents}>{children}</div>
    </article>
  );
}

export default PageContainer;
