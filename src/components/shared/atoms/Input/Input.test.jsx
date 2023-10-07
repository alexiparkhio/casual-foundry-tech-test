import { fireEvent, render } from "@testing-library/react";
import { Input } from "./Input";

describe("[Input]", () => {
  const onChange = jest.fn();

  it("should render a Input component properly", () => {
    const { getByTestId } = render(
      <Input
        placeholder="Some placeholder"
        label="some label"
        onChange={onChange}
        value="some value"
      />
    );
    const input = getByTestId("Input");
    expect(input).toHaveClass("Input");
  });

  it("should print the text on the label", () => {
    const { getByTestId } = render(
      <Input
        placeholder="Some placeholder"
        label="some label"
        onChange={onChange}
        value="some value"
      />
    );
    const input = getByTestId("Input");
    expect(input.children[0].textContent).toEqual("some label");
  });

  it("should print the text on the input", () => {
    const { getByTestId } = render(
      <Input
        placeholder="Some placeholder"
        label="some label"
        onChange={onChange}
        value="some value"
      />
    );
    const input = getByTestId("Input");
    expect(input.children[1].value).toEqual("some value");
  });

  it("should trigger the onChange callback on change text", () => {
    const { getByTestId } = render(
      <Input
        placeholder="Some placeholder"
        label="some label"
        onChange={onChange}
        value="some value"
      />
    );
    const input = getByTestId("Input__box");

    fireEvent.change(input, { target: { value: "something" } });

    expect(onChange).toHaveBeenCalledWith("something");
  });
});
