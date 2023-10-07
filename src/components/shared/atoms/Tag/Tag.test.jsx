import { render } from "@testing-library/react";
import { Tag } from "./Tag";

describe("[Tag]", () => {
  it("should render a Tag component properly", () => {
    const { getByTestId } = render(<Tag>Sample text</Tag>);
    const tag = getByTestId("Tag");
    expect(tag).toHaveClass("Tag");
  });

  it("should print the children inside it", () => {
    const { getByTestId } = render(<Tag>Sample text</Tag>);
    const tag = getByTestId("Tag");
    expect(tag.textContent).toEqual("Sample text");
  });
});
