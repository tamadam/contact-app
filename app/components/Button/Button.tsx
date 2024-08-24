"use client";

import { forwardRef, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonVariant =
  | "priority"
  | "primary"
  | "secondary"
  | "square"
  | "normal";

interface ButtonProps {
  type?: "submit" | "button" | undefined;
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      variant = "secondary",
      disabled = false,
      className,
      children,
      onClick,
    }: ButtonProps,
    ref
  ) => {
    const buttonStyles = [
      styles.button,
      styles[variant],
      className && className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        type={type}
        className={buttonStyles}
        onClick={onClick}
        disabled={disabled}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
