import * as S from "./Icon.styles";
import { IconProps } from "./Icon.types";

export function Icon({
  fill,
  fillColor,
  size,
  color,
  name,
  ...rest
}: IconProps) {
  return (
    <S.Icon
      $fill={fill}
      $fillColor={fillColor}
      $size={size}
      $color={color}
      className="material-symbols-rounded"
      role="icon"
      {...rest}
    >
      {name}
    </S.Icon>
  );
}
