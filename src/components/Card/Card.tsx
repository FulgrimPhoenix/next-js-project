import Image from "next/image";
import cover from "@/assets/images/article_avatar.png";
import styles from "./Card.module.scss";
import cn from "classnames";
import { Divider, LikeButton, Paragraph, Tag, Title } from "@/ui";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface ICard
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cardParams: {
    title: string;
    description: string;
    date: string;
    time: string;
    catecogria: string;
    href: {
      link: string;
      title: string;
    };
    likes: number;
  };
}

const Card: FC<ICard> = ({ cardParams, ...props }) => {
  return (
    <article className={cn(styles["card"])} {...props}>
      <div className={cn(styles["image-area"])}>
        <Image
          src={cover}
          className={cn(styles["image"])}
          alt="автатара"
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
        <Paragraph size="sm">{cardParams.description}</Paragraph>
        <div className={cn(styles["action-bar"])}>
          <Tag color="ghost">{cardParams.time}</Tag>
          <Tag href={cardParams.href.link}>{cardParams.href.title}</Tag>
        </div>
      </div>
    </article>
  );
};

export default Card;
