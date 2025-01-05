export interface IconProps {
  name: string;
  fillColor?: string;
  fill?: boolean;
  color?: string;
  size?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export interface IconStyledProps {
  $fill?: boolean;
  $color?: string;
  $size?: string;
  $fillColor?: string;
}
