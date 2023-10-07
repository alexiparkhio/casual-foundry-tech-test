import React, { PropsWithChildren } from "react";
import "./Tag.scss";

interface TagProps {}

/**
 * TODO: add docu
 * @param param0
 * @returns
 */
export const Tag: React.FC<PropsWithChildren<TagProps>> = ({ children }) => {
  return (
    <span className="Tag" data-testid="Tag">
      {children}
    </span>
  );
};
