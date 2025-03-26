import { Card } from "@/components";
import { ARTICLES_LIST } from "./page.consts";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        {ARTICLES_LIST.map((el, i) => (
          <Card cardParams={el} key={i} />
        ))}
      </div>
    </div>
  );
}
