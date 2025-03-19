import { DetailedHTMLProps, SVGProps } from "react";

export interface IIcon
  extends DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement> {
  size?: "sm" | "md" | "lg";
  color?: string;
}
