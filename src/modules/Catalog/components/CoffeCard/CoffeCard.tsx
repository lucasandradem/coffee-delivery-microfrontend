import { useState } from "react";
import { Icon } from "../../../../components/Icon";
import * as S from "./CoffeCard.styles";
import { CoffeCardProps } from "./CoffeCard.types";

export function CoffeCard(coffee: CoffeCardProps) {
  const { image, name, description, price, types, amount } = coffee;
  const [quantity, setQuantity] = useState(0);

  function handleIncrease(amount: number) {
    if (quantity < amount) {
      setQuantity((state) => state + 1);
    }
  }

  function handleDecrease() {
    if (quantity > 0) setQuantity((state) => state - 1);
  }

  return (
    <S.Container>
      <img src={image} />
      <S.CoffeType>
        {types.map((type) => (
          <span>{type}</span>
        ))}
      </S.CoffeType>
      <S.Info>
        <strong>{name}</strong>
        <p>{description}</p>
      </S.Info>

      <S.Footer>
        <p>
          R$ <strong>{price}</strong>
        </p>
        <S.CoffeAmout>
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleIncrease(amount)}>+</button>
        </S.CoffeAmout>
        <S.Cart>
          <Icon name="shopping_cart" size="24px" color="#fff" />
        </S.Cart>
      </S.Footer>
    </S.Container>
  );
}
