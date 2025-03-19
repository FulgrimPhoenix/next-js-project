import { Button, MainLogo, TextField } from "@/ui";
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
    </nav>
  );
};

export default SideBar;
