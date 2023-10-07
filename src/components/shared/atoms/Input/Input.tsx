import React from "react";
import { Tag } from "../Tag/Tag";
import "./Input.scss";

interface InputProps {
  label: string;
  onChange: (value: string) => void;
  value: string | number;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <div className="Input" data-testid="">
      <Tag>{label}</Tag>
      <input
        className="Input__box"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={({ target: { value } }) => onChange(value)}
      />
    </div>
  );
};
