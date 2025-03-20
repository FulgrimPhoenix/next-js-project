import { Button, MainLogo, Paragraph, Tag, TextField } from "@/ui";
import cn from "classnames";
import styles from "./SideBar.module.scss";
import { SearchIcon } from "@/assets";

const SideBar = () => {
  return (
    <nav className={cn(styles.sidebar)}>
      <MainLogo />
      <TextField
        placeholder="Поиск..."
        button={{
          isAvailable: true,
          element: (
            <Button appearance="primary">
              <SearchIcon color="#fff" size="sm" />
            </Button>
          ),
        }}
      />
      <Paragraph size="sm">Маленький</Paragraph>
      <Paragraph size="md">Средний</Paragraph>
      <Paragraph size="lg">Большой</Paragraph>
      <Tag color="red">Test</Tag>
      <Tag color="primary" href="#">
        Primary
      </Tag>
      <Tag color="green">Green</Tag>
    </nav>
  );
};

export default SideBar;
