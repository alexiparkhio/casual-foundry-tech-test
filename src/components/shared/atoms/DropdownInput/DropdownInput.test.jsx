import { fireEvent, render } from "@testing-library/react";
import { DropdownInput } from "./DropdownInput";
import "./DropdownInput.scss";

describe("[DropdownInput]", () => {
  const setup = () => {
    const data = ["Test 1", "Test 2"];
    const placeholder = "Placeholder";
    const onSelect = jest.fn();

    const utils = render(
      <DropdownInput
        data={data}
        placeholder={placeholder}
        onSelect={onSelect}
      />
    );
    const input = utils.getByTestId("Dropdown-select");

    return {
      data,
      input,
      onSelect,
      ...utils,
    };
  };

  it("should successfully render a DropdownInput", () => {
    const { getByTestId } = setup({});

    const input = getByTestId("DropdownInput");
    expect(input).toHaveClass("DropdownInput");
  });

  it("should open the content on click", () => {
    const { input, getByTestId } = setup({});

    fireEvent.click(input);

    const content = getByTestId("Dropdown-content");
    expect(content).toHaveClass("DropdownInputContent");
  });

  it("should print the content properly on a correct format function", () => {
    const { getByTestId, data, input, formatValue } = setup({});

    fireEvent.click(input);

    const content = getByTestId("Dropdown-content");
    expect(content.children.length).toEqual(data.length);

    data.forEach((el, i) => {
      expect(el).toEqual(content.children[i].textContent);
    });
  });

  it("should trigger the select function on choosing one option", () => {
    const { getByTestId, onSelect, input } = setup({});

    fireEvent.click(input);

    const content = getByTestId("Dropdown-content");

    fireEvent.click(content.children[0]);

    expect(onSelect).toHaveBeenCalled();
  });
});
