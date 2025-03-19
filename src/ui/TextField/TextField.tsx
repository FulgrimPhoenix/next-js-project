import React, {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import cn from "classnames";
import styles from "./TextField.module.scss";

interface ITextField
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  button?: {
    isAvailable: boolean;
    element: ReactNode;
  };
}

const TextField: FC<ITextField> = (props) => {
  return props.button?.isAvailable ? (
    <div className={cn(styles["text-field-container"])}>
      <input className={cn(styles["text-field"])} {...props} />
      <div className={cn(styles["text-field-button"])}>
        {props.button?.element}
      </div>
    </div>
  ) : (
    <input className={cn(styles["text-field"])} {...props} />
  );
};

const MemoizedTextField = React.memo(TextField);

export default MemoizedTextField;
