import * as S from "./Catalog.styles";
import { CoffeeProps } from "./Catalog.types";
import { CoffeeCard } from "./components/CoffeeCard/CoffeeCard";
import { useCatalog } from "./useCatalog";

export function Catalog() {
  const { coffees, isLoading } = useCatalog();
  return (
    <S.Container>
      <h2>Nossos cafés</h2>
      <S.Content>
        {isLoading && <p>Carregando...</p>}

        {coffees.map((coffee: CoffeeProps) => (
          <CoffeeCard
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
