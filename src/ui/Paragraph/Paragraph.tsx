import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./Paragraph.module.scss";

interface IParagraph
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const Paragraph: FC<IParagraph> = ({ size = "md", children, ...props }) => {
  return (
    <p
      className={cn(styles.paragraph, {
        [styles.sm]: size === "sm",
        [styles.md]: size === "md",
        [styles.lg]: size === "lg",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

const MemoizedParagraph = React.memo(Paragraph);

export default MemoizedParagraph;
