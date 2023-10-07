import React, { PropsWithChildren } from "react";
import "./Title.scss";

export const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return <span className="Title">{children}</span>;
};
