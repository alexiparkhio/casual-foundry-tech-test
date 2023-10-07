import React, { useState } from "react";
import "./DropdownInput.scss";

/* Components */
import { DropdownArrow } from "../../../../assets/icons/DropdownArrow";
import { Tag } from "../Tag/Tag";

interface DropdownInputProps {
  label: string;
  value: any;
  data: any[];
  onSelect: (v: any) => void;
}

/**
 * DropdownInput depresents an input with a dropdown feature.
 * @param {string} label The input's desired label text.
 * @param {any} value The input's selected value.
 * @param {any[]} data The data representing all options to be displayed.
 * @param {Function} onSelect The callback function triggered when selecting one input option.
 * @returns {React.FC<DropdownInputProps>} DropdownInput
 */
export const DropdownInput: React.FC<DropdownInputProps> = ({
  label,
  onSelect,
  value,
  data,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const handleSelectedValue = (value: any) => {
    setOpenDropdown(false);
    onSelect(value);
  };

  return (
    <div className="DropdownInput" data-testid="DropdownInput">
      <Tag>{label}</Tag>

      <div
        className="DropdownInput__container"
        data-testid="DropdownInput__container"
      >
        <div
          className="DropdownInput__select"
          onClick={() => setOpenDropdown(!openDropdown)}
          data-testid="Dropdown-select"
        >
          <span className="DropdownInput__placeholder">
            {value || selectedValue}
          </span>

          <DropdownArrow />
        </div>

        {openDropdown ? (
          <div className="DropdownInputContent" data-testid="Dropdown-content">
            {data.map((value: any, index: number) => {
              return (
                <span
                  key={value.id || index}
                  className="DropdownInputContent__option"
                  onClick={() => handleSelectedValue(value)}
                >
                  <span className="DropdownInputContent__value">{value}</span>
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};
