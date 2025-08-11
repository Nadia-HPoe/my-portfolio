import styles from "./title.module.scss";

type Props = {
  title: string;
};

function Title({ title }: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <hr className={styles.line}></hr>
    </div>
  );
}

export default Title;
