import React from "react";
import { NavigateButton } from "./button.styles";

const Button = ({
  text,
  backgroundColor,
  color,
  borderColor,
  handleClick,
  width,
  disabled = false,
}) => {
  return (
    <>
      <NavigateButton
        backgroundColor={backgroundColor}
        color={color}
        borderColor={borderColor}
        onClick={() => handleClick()}
        type="button"
        width={width}
        disabled={disabled}
      >
        {text}
      </NavigateButton>
    </>
  );
};

export default Button;