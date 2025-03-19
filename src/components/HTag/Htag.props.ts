import { ReactNode } from "react";

export interface IHtag {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}
