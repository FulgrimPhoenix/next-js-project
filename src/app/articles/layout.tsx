import { Metadata } from "next";
import styles from "./styles.module.scss";
import cn from "classnames";

export const metadata: Metadata = {
  title: "Articles",
  description: "List of articles",
};

const ArticlesLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className={cn(styles.page)}>{children}</main>;
};

export default ArticlesLayout;
