import { useState } from "react";

export function useCoffeeCard(amount: number) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    if (quantity < amount) {
      console.log("quantity", quantity);

      setQuantity((prevState) => prevState + 1);
    }
  }

  function handleDecrease() {
    if (quantity > 0) setQuantity((prevState) => prevState - 1);
  }

  return { quantity, handleIncrease, handleDecrease };
}
