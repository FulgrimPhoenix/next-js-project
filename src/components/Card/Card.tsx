import Image from "next/image";
// import cover from "@/assets/images/article_avatar.png";
import styles from "./Card.module.scss";
import cn from "classnames";
import { Divider, LikeButton, Paragraph, Tag, Title } from "@/ui";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface ICard
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cardParams: {
    id: string;
    title: string;
    photo: string;
    description: string;
    date: string;
    time: string;
    catecogria: string;
    likes: number;
  };
}

const Card: FC<ICard> = ({ cardParams, ...props }) => {
  return (
    <article className={cn(styles["card"])} {...props}>
      <div className={cn(styles["image-area"])}>
        <Image
          src={cardParams.photo}
          className={cn(styles["image"])}
          alt="аватар статьи"
          width={687}
          height={440}
          priority
        />
      </div>

      <div className={cn(styles["content"])}>
        <div className={cn(styles["tag-bar"])}>
          <Tag color="gray">{cardParams.catecogria}</Tag>
          <Divider variant="md" />
          <Tag color="ghost">{cardParams.date}</Tag>
          <LikeButton variant="default" counter={cardParams.likes} />
        </div>
        <Title tag="h4">{cardParams.title}</Title>
        <Paragraph size="md">{cardParams.description}</Paragraph>
        <div className={cn(styles["action-bar"])}>
          <Tag color="ghost">{cardParams.time}</Tag>
          <Tag href={`articles/${cardParams.id}`}>Читать →</Tag>
        </div>
      </div>
    </article>
  );
};

export default Card;
