import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./Tag.module.scss";
import Link from "next/link";

interface ITag
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "sm" | "md";
  color?: "ghost" | "gray";
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
        [styles.gray]: color === "gray",
      })}
      {...props}
    >
      {href ? (
        <Link href={href} className={cn(styles.href)}>
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default Tag;
