import styled, { css } from "styled-components";
import { IconStyledProps } from "./Icon.types";

export const Icon = styled.span<IconStyledProps>`
  ${({ $fill, $fillColor, $color, $size }) => css`
    font-variation-settings: "FILL" ${$fill ? 1 : 0};
    color: ${$color ? $color : "#000"};
    font-size: ${$size ? $size : "24px"};
    background-color: ${$fillColor ? $fillColor : "transparent"};
    border-radius: ${$fill ? "8px" : "0"};
  `}
`;
