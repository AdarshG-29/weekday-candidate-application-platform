import { Button } from "@mui/material";
const ButtonComp = ({
  label,
  color,
  variant,
  onClick,
  disabled,
  id,
  size,
  className,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
      aria-describedby={id}
      size={size}
      className={className}
    >
      {label}
    </Button>
  );
};

export default ButtonComp;
