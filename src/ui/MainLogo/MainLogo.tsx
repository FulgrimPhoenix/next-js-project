import { MainIcon } from "@/assets";
import Link from "next/link";
import cn from "classnames";
import styles from "./MainLogo.module.scss";

const MainLogo = () => {
  return (
    <Link href={"/"} className={cn(styles["main-logo"])}>
      <MainIcon size="lg" color="var(--primary)" />
      <h1 className={cn(styles.title)}>
        OWL <span className={cn(styles.accent)}>top</span>
      </h1>
    </Link>
  );
};

export default MainLogo;
