import { Divider, LikeButton, Paragraph, Tag, Title } from "@/ui";
import styles from "./styles.module.scss";
import cn from "classnames";
import { IArticle } from "@/types/articles.types";
import Image from "next/image";
import { Comments } from "@/components";

interface ArticleParams {
  id: string;
}

const getAtrticle = (id: string) => {
  return fetch(`http://localhost:3001/articles/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(`Ошибка: ${err}`);
    });
};

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:3001/articles", {
    next: { revalidate: 60 * 60 * 24 },
  });
  const articles = await res.json();

  return articles.map((article: { id: string }) => ({
    id: article.id.toString(),
  }));
};

const Article = async ({ params }: { params: ArticleParams }) => {
  const article: IArticle = await getAtrticle(params.id);

  console.log(article);

  return (
    <>
      <Title tag="h2">
        {article.title} {params.id}
      </Title>
      <div className={cn(styles["tag-bar"])}>
        <Tag color="gray">{article.catecogria}</Tag>
        <Divider variant="lg" />
        <Tag color="ghost">{article.date}</Tag>
        <Divider variant="lg" />
        <Tag color="ghost">{article.time}</Tag>
        <Divider variant="lg" />
        <LikeButton variant="default" counter={article.likes} />
      </div>
      <Image
        src={"http://localhost:3000/images/article_avatar.png"}
        className={cn(styles["image"])}
        alt="автатара"
        width={687}
        height={440}
      />
      <Paragraph size="lg" style={{ maxWidth: 657 }}>
        {article.description}
      </Paragraph>

      {article.content.map((el, i) => (
        <div className={cn(styles["content"])} key={i}>
          <Title tag="h3">{el.title}</Title>
          <Paragraph size="lg" style={{ maxWidth: 657 }}>
            {el.text}
          </Paragraph>
        </div>
      ))}
      <div className={cn(styles["like-panel"])}>
        <Paragraph size="lg" style={{ color: "var(--black)" }}>
          Понравилось? Жми
        </Paragraph>
      </div>
      <Comments />
    </>
  );
};

export default Article;
