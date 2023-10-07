import React from "react";

/**
 * DropdownArrow represents an small triangle that acts as a button to open a dropdown input.
 *
 * @returns {React.SVGProps<SVGSVGElement>} DropdownArrow
 */
export const DropdownArrow = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="DropdownArrow"
  >
    <path
      d="M6.99951 8.00002L0.938098 0.499402L13.0625 0.500637L6.99951 8.00002Z"
      fill="#010202"
    />
  </svg>
);
