import { render } from "@testing-library/react";
import { LoadingDisplayer } from "./LoadingDisplayer";
import "./LoadingDisplayer.scss";

describe("[LoadingDisplayer]", () => {
  it("should successfully render a LoadingDisplayer component", () => {
    const { getByTestId } = render(<LoadingDisplayer />);

    const loading = getByTestId("LoadingDisplayer");
    expect(loading).toHaveClass("LoadingDisplayer");

    const ballContainer = loading.children[0];
    expect(ballContainer).toHaveClass("LoadingDisplayer__ball-container");
    expect(ballContainer.children[0]).toHaveClass(
      "LoadingDisplayer__ball--static"
    );
    expect(ballContainer.children[1]).toHaveClass("LoadingDisplayer__ball");
  });
});
