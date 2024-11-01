import { render, screen } from "@testing-library/react";

import FeatureOne from "./FeatureOne";

describe("FeatureOne", () => {
  it("renders component correctly", () => {
    render(<FeatureOne />);

    const element = screen.getByText("This is a Feature from a Micro-Frontend");
    expect(element).toBeInTheDocument();
  });
});
