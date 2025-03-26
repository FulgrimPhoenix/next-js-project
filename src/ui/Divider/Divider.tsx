import { FC } from "react";
import cn from "classnames";
import styles from "./Divider.module.scss";

interface IDivider {
  variant: "md" | "lg";
}

const Divider: FC<IDivider> = ({ variant }) => {
  return (
    <span
      className={cn(styles["divider"], {
        [styles["md"]]: variant === "md",
        [styles["lg"]]: variant === "lg",
      })}
    >
      ·
    </span>
  );
};

export default Divider;
