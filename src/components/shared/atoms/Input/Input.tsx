import React from "react";
import "./Input.scss";

/* Components */
import { Tag } from "../Tag/Tag";

interface InputProps {
  label: string;
  onChange: (value: string) => void;
  value: string | number;
  placeholder: string;
}

/**
 * Input represents the general input used in the application.
 *
 * @param {string} label The input's desired label text.
 * @param {string | number} value The input's writen value.
 * @param {string} placeholder The text displayed when no value has been writen yet.
 * @param {Function} inChane The callback function triggered when changing the input's text.
 * @returns {React.FC<InputProps>} Input
 */
export const Input: React.FC<InputProps> = ({
  label,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <div className="Input" data-testid="Input">
      <Tag>{label}</Tag>
      <input
        className="Input__box"
        data-testid="Input__box"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={({ target: { value } }) => onChange(value)}
      />
    </div>
  );
};
