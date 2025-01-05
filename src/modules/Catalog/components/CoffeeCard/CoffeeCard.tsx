import { Icon } from "../../../../components/Icon";
import * as S from "./CoffeeCard.styles";
import { CoffeeCardProps } from "./CoffeeCard.types";
import { useCoffeeCard } from "./useCoffeeCard";

export function CoffeeCard(coffee: CoffeeCardProps) {
  const { image, name, description, price, types, amount } = coffee;
  const { quantity, handleDecrease, handleIncrease } = useCoffeeCard(amount);
  console.log("coffee", quantity);

  return (
    <S.Container>
      <img src={image} alt={name} />
      <S.CoffeType>
        {types.map((type, index) => (
          <span key={index}>{type}</span>
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
          <button onClick={handleIncrease}>+</button>
        </S.CoffeAmout>
        <S.Cart>
          <Icon name="shopping_cart" size="24px" color="#fff" />
        </S.Cart>
      </S.Footer>
    </S.Container>
  );
}
