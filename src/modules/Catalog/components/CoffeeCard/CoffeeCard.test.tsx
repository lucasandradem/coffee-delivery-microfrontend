import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, test } from "vitest";
import { CoffeeCard } from "./CoffeeCard";

const coffee = {
  amount: 5,
  description:
    "Uma dose de café expresso com o dobro de leite e espuma cremosa",
  id: 1,
  image: "./assets/coffees/latte.png",
  name: "Latte",
  price: 5.99,
  types: ["tradicional", "com leite"],
};

beforeEach(() => {
  render(
    <CoffeeCard
      amount={coffee.amount}
      description={coffee.description}
      id={coffee.id}
      image={coffee.image}
      name={coffee.name}
      price={coffee.price}
      types={coffee.types}
    />
  );
});

describe("CoffeeCard", () => {
  test("should render coffee card", async () => {
    const imageElement = screen.getByRole("img", { name: /latte/i });
    const nameElement = screen.getByText(/latte/i);
    const descriptionElement = screen.getByText(
      /Uma dose de café expresso com o dobro de leite e espuma cremosa/i
    );
    const priceElement = screen.getByText(/5.99/i);
    const quantityElement = screen.getByText(/1/i);

    expect(imageElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(quantityElement.textContent).toBe("1");

    coffee.types.forEach((type) => {
      expect(screen.getByText(type)).toBeInTheDocument();
    });
  });

  test("should increase quantity", async () => {
    const user = userEvent.setup();
    const quantityElement = screen.queryByText(/1/i);

    const increaseButtonElement = screen.getByRole("button", { name: "+" });

    expect(increaseButtonElement).toBeInTheDocument();

    await user.click(increaseButtonElement);

    expect(quantityElement?.textContent).toBe("2");
  });

  test("should decrease quantity", async () => {
    const user = userEvent.setup();
    const quantityElement = screen.getByText(/1/i);

    const decreaseButtonElement = screen.getByRole("button", { name: /-/i });
    expect(decreaseButtonElement).toBeInTheDocument();

    await user.click(decreaseButtonElement);

    expect(quantityElement.textContent).toBe("0");
  });
});
