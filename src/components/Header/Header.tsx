import { Title } from "@/ui";
import styles from "./Header.module.scss";
import cn from "classnames";
import { GitIcon } from "@/assets";

const Header = () => {
  return (
    <header className={cn(styles.header)}>
      <Title tag="h1">.my_blog</Title>
      <GitIcon />
    </header>
  );
};

export default Header;
