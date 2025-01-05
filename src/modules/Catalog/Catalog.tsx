import { useEffect, useState } from "react";

import { api } from "../../service/api";
import * as S from "./Catalog.styles";
import { CoffeeProps } from "./Catalog.types";
import { CoffeCard } from "./components/CoffeCard/CoffeCard";

export function Catalog() {
  const [coffees, setCoffees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get("/coffees")
      .then((response) => {
        setCoffees(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <S.Container>
      <h2>Nossos cafés</h2>
      <S.Content>
        {isLoading && <p>Carregando...</p>}

        {coffees.map((coffee: CoffeeProps) => (
          <CoffeCard
            key={coffee.id}
            id={Number(coffee.id)}
            name={coffee.name}
            description={coffee.description}
            price={coffee.price}
            image={coffee.image}
            types={coffee.type}
            amount={coffee.amount}
          />
        ))}
      </S.Content>
    </S.Container>
  );
}
