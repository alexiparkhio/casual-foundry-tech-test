import React, { PropsWithChildren } from "react";
import "./Tag.scss";

/**
 * Tag represents the small labeled text on top of other components.
 * @returns {React.FC<PropsWithChildren>} Tag
 */
export const Tag: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <span className="Tag" data-testid="Tag">
      {children}
    </span>
  );
};
