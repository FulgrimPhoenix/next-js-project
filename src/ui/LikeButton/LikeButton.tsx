import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import styles from "./LikeButton.module.scss";
import cn from "classnames";
import { LikeIcon } from "@/assets";

interface ILikeButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "default" | "big";
  counter: number;
}

const LikeButton: FC<ILikeButton> = ({
  variant = "default",
  counter,
  ...props
}) => {
  return variant === "default" ? (
    <button className={cn(styles.button)} {...props}>
      <span className={cn(styles["likes-counter"])}>{counter}</span>
      <LikeIcon size="sm" />
    </button>
  ) : (
    <button className={cn(styles.button)} {...props}>
      <LikeIcon size="sm" />
    </button>
  );
};

const MemoizedLikeButton = React.memo(LikeButton);

export default MemoizedLikeButton;
