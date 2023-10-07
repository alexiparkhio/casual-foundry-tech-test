import { render } from "@testing-library/react";
import { Title } from "./Title";

describe("[Title]", () => {
  it("should render a Title component properly", () => {
    const { getByTestId } = render(<Title>Sample text</Title>);
    const title = getByTestId("Title");
    expect(title).toHaveClass("Title");
  });

  it("should print the children inside it", () => {
    const { getByTestId } = render(<Title>Sample text</Title>);
    const title = getByTestId("Title");
    expect(title.textContent).toEqual("Sample text");
  });
});
