import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Icon } from "./Icon";

describe("App", () => {
  it("renders the Icon component", () => {
    render(<Icon name="home" />);

    const iconName = screen.getByText(/home/i);
    const iconElement = screen.getByRole("icon");

    expect(iconName).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
});
