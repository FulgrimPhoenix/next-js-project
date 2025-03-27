import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./TextField.module.scss";

interface ITextField
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant: "text" | "textarea";
}

const TextField: FC<ITextField> = (props) => {
  return props.variant === "text" ? (
    <input className={cn(styles["text-field"])} {...props} />
  ) : (
    <textarea
      className={cn(styles["text-field"])}
      rows={5}
      cols={50}
      placeholder={props.placeholder}
      value={props.value}
      style={props.style}
      onChange={
        props.variant === "textarea"
          ? (props.onChange as unknown as React.ChangeEventHandler<HTMLTextAreaElement>)
          : undefined
      }
    />
  );
};

const MemoizedTextField = React.memo(TextField);

export default MemoizedTextField;
