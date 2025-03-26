import { IIcon } from "@/types/icons.types";
import { FC } from "react";

const GitIcon: FC<IIcon> = (props) => {
  const getSize = (size: IIcon["size"]) => {
    switch (size) {
      case "sm":
        return { width: "13px", height: "14px" };
      case "md":
        return { width: "17px", height: "18px" };
      case "lg":
        return { width: "21px", height: "22px" };
      default:
        return { width: "17px", height: "18px" };
    }
  };

  const currentSize = getSize(props.size);

  return (
    <svg
      width={currentSize.width}
      height={currentSize.height}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={props.color || "#6e6e6e"}
        fill={"none"}
        d="M13 19V15.5C13 14.5 13.1 14.1 12.5 13.5C15.3 13.2 18 12.1 18 7.50001C17.9988 6.30498 17.5325 5.15732 16.7 4.30001C17.0905 3.26198 17.0545 2.11164 16.6 1.10001C16.6 1.10001 15.5 0.800012 13.1 2.40001C11.0672 1.8706 8.93276 1.8706 6.9 2.40001C4.5 0.800012 3.4 1.10001 3.4 1.10001C2.94548 2.11164 2.90953 3.26198 3.3 4.30001C2.46745 5.15732 2.00122 6.30498 2 7.50001C2 12.1 4.7 13.2 7.5 13.5C6.9 14.1 6.9 14.7 7 15.5V19M7 17C2.7 18.4 2.7 14.5 1 14L7 17Z"
      />
    </svg>
  );
};

export default GitIcon;
