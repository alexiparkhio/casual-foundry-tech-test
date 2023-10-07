import React, { PropsWithChildren } from "react";
import "./Label.scss";

interface LabelProps {}

/**
 * TODO: add docu
 * @param param0
 * @returns
 */
export const Label: React.FC<PropsWithChildren<LabelProps>> = ({
  children,
}) => {
  return (
    <span className="Label" data-testid="Label">
      {children}
    </span>
  );
};
