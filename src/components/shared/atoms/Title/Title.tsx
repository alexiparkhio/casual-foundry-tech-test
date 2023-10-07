import React, { PropsWithChildren } from "react";
import "./Title.scss";

/**
 * Title represents a header-oriented text used on the application.
 * @returns {React.FC<PropsWithChildren>} Title
 */
export const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <span className="Title" data-testid="Title">
      {children}
    </span>
  );
};
