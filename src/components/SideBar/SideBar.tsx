import { Button, LikeButton, Paragraph, Tag, Title } from "@/ui";
import cn from "classnames";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <nav className={cn(styles.sidebar)}>
      <Title tag="h1">.my_blog</Title>
      <Paragraph size="sm">Маленький</Paragraph>
      <Paragraph size="md">Средний</Paragraph>
      <Paragraph size="lg">Большой</Paragraph>
      <Button appearance="primary">Кнопка</Button>
      <Tag color="ghost">1 месяц назад</Tag>
      <Tag>Читать</Tag>
      <LikeButton variant="default" counter={4} />
    </nav>
  );
};

export default SideBar;
