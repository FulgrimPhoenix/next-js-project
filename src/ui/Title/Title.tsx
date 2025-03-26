import cn from "classnames";
import styles from "./Title.module.scss";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface ITitle
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Title: FC<ITitle> = ({ tag, ...props }) => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={cn(styles.h1)} {...props}>
          {props.children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={cn(styles.h2)} {...props}>
          {props.children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={cn(styles.h3)} {...props}>
          {props.children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={cn(styles.h4)} {...props}>
          {props.children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={cn(styles.h3)} {...props}>
          {props.children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={cn(styles.h3)} {...props}>
          {props.children}
        </h6>
      );
    default:
      return <></>;
  }
};

export default Title;
