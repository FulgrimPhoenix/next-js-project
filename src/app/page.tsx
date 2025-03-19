import styles from "./page.module.css";
import { Button } from "../ui";

export default function Home() {
  const a = 5;
  debugger;
  console.log(a);

  return (
    <div className={styles.page}>
      <Button appearance="primary">Кнопка</Button>
    </div>
  );
}
