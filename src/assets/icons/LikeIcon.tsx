import { IIcon } from "@/types/icons.types";
import { FC } from "react";

const LikeIcon: FC<IIcon> = (props) => {
  const getSize = (size: IIcon["size"]) => {
    switch (size) {
      case "sm":
        return { width: "13px", height: "13px" };
      case "md":
        return { width: "16px", height: "16px" };
      case "lg":
        return { width: "21px", height: "21px" };
      default:
        return { width: "13px", height: "13px" };
    }
  };

  const currentSize = getSize(props.size);

  return (
    <svg
      width={currentSize.width}
      height={currentSize.height}
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      // style={{ display: "block", minHeight: "11px", minWidth: "11px" }}
    >
      <path
        stroke={props.color || "#6e6e6e"}
        fill={"none"}
        d="M3.33333 5.66666H0.666667V12.3333H3.33333M3.33333 5.66666V12.3333M3.33333 5.66666L6.79705 1.62566C7.12572 1.24221 7.64282 1.07737 8.13277 1.19986L8.16448 1.20779C9.059 1.43141 9.46196 2.47372 8.9505 3.24091L7.33333 5.66666H10.3736C11.215 5.66666 11.846 6.43643 11.681 7.26149L10.881 11.2615C10.7564 11.8847 10.2092 12.3333 9.5736 12.3333H3.33333"
      />
    </svg>
  );
};

export default LikeIcon;
