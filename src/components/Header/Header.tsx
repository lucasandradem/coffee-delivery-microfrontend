import { Icon } from "../Icon";
import { Actions, Cart, Container, Location } from "./Header.styles";
import Logo from "/assets/Logo.png";

export function Header() {
  return (
    <Container>
      <a href="/">
        <img src={Logo} alt="Copo de café" />
      </a>
      <Actions>
        <Location>
          <Icon name="location_on" color="#4b2995" />
          <span>Aracaju-se</span>
        </Location>
        <button type="button">
          <Cart>
            <Icon name="shopping_cart" fill color="#c47f17" />
            <p>{2}</p>
          </Cart>
        </button>
      </Actions>
    </Container>
  );
}
