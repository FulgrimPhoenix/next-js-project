import { FC } from "react";
import styles from "./Button.module.css";
import { IButton } from "./Button.props";
import cn from "classnames";

const Button: FC<IButton> = (props) => {
  return (
    <button
      className={cn(styles.button, props.className, {
        [styles.primary]: props.appearance === "primary",
        [styles.ghost]: props.appearance === "ghost",
      })}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
