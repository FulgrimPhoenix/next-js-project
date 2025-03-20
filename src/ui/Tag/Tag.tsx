import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./Tag.module.scss";

interface ITag
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "sm" | "md";
  color?: "primary" | "ghost" | "red" | "gray" | "green";
  href?: string;
  children: ReactNode;
}

const Tag: FC<ITag> = ({
  size = "md",
  color = "ghost",
  href,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.sm]: size === "sm",
        [styles.md]: size === "md",
        [styles.ghost]: color === "ghost",
        [styles.primary]: color === "primary",
        [styles.red]: color === "red",
        [styles.gray]: color === "gray",
        [styles.green]: color === "green",
      })}
      {...props}
    >
      {href ? (
        <a href={href} target="blank">
          {children}
        </a>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default Tag;
