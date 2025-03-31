import { Card } from "@/components";
import styles from "./styles.module.scss";
import cn from "classnames";
import { IArticle } from "@/types/articles.types";

const getArticles = async (): Promise<IArticle[]> => {
  const res = await fetch("http://localhost:3001/articles");
  return res.json();
};

const Articles = async () => {
  const articles = await getArticles();

  return (
    <div className={cn(styles.grid)}>
      {articles.map((el, i) => (
        <Card cardParams={el} key={i} />
      ))}
    </div>
  );
};

export default Articles;
