import React, { useState } from "react";
import { DropdownArrow } from "../../../../assets/icons/DropdownArrow";
import { Tag } from "../Tag/Tag";
import "./DropdownInput.scss";

interface DropdownInputProps {
  label: string;
  value: any;
  data: any[];
  onSelect: (v: any) => void;
}

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

      <div className="DropdownInput__container" data-testid="DropdownInput">
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
