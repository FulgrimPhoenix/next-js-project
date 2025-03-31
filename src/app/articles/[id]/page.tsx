import { Divider, LikeButton, Paragraph, Tag, Title } from "@/ui";
import styles from "./styles.module.scss";
import cn from "classnames";
import { IArticle } from "@/types/articles.types";
import Image from "next/image";
import { Comments } from "@/components";
import { FC } from "react";

interface IArticlePage {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<unknown>;
}

const getArticle = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3001/articles/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(
        `Ошибка при получении статьи ${id}: ${res.status} ${res.statusText}`
      );
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Ошибка при запросе статьи:", error);
    return null;
  }
};

export const generateStaticParams = async () => {
  try {
    const res = await fetch("http://localhost:3001/articles", {
      next: { revalidate: 60 * 60 * 24 },
    });

    const articles = await res.json();

    return articles.map((article: { id: string }) => ({
      id: article.id.toString(),
    }));
  } catch (error) {
    console.error("Ошибка при получении списка статей:", error);
    return [];
  }
};

const Article: FC<IArticlePage> = async (props) => {
  const { id } = await props.params;

  const article: IArticle = await getArticle(id);

  if (!article) {
    return <p>Статья не найдена или произошла ошибка загрузки.</p>;
  }

  return (
    <>
      <Title tag="h2">
        {article.title} #{article.id}
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
        src={article.photo}
        className={cn(styles["image"])}
        alt="аватар статьи"
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
