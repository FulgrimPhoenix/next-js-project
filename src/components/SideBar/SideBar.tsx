import { Button, Paragraph, Tag } from "@/ui";
import cn from "classnames";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <nav className={cn(styles.sidebar)}>
      <Paragraph size="sm">Маленький</Paragraph>
      <Paragraph size="md">Средний</Paragraph>
      <Paragraph size="lg">Большой</Paragraph>
      <Button appearance="primary">Кнопка</Button>
      <Tag color="ghost">1 месяц назад</Tag>
      <Tag color="href">Читать</Tag>
    </nav>
  );
};

export default SideBar;
