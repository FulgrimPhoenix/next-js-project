import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactNode,
} from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: "primary" | "ghost";
  children: ReactNode;
}

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

const MemoizedButton = React.memo(Button);

export default MemoizedButton;
