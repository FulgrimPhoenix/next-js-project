import { Metadata } from "next";
import styles from "./styles.module.scss";
import cn from "classnames";

export const metadata: Metadata = {
  title: "Article Details",
  description: "Read the full article",
};

const ArticleLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className={cn(styles.article)}>{children}</section>;
};

export default ArticleLayout;
