import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { Header } from "./Header";

beforeEach(() => {
  render(<Header />);
});

describe("Header", () => {
  test("should render the header", () => {
    const logoElement = screen.getByAltText("Copo de café");
    const locationElement = screen.getByText(/location_on/i);
    const cartElement = screen.getByText(/shopping_cart/i);

    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute("src", "/assets/Logo.png");
    expect(logoElement).toBeInTheDocument();
    expect(locationElement).toBeInTheDocument();
    expect(cartElement).toBeInTheDocument();
  });

  test("should redirect to homepage when logo is clicked", () => {
    const logoLink = screen.getByRole("link");
    expect(logoLink).toHaveAttribute("href", "/");
  });
});
