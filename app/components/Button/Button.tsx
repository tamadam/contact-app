"use client";

import { ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "priority" | "primary" | "secondary";

interface ButtonProps {
  type?: "submit" | "button" | undefined;
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  type = "button",
  variant = "secondary",
  disabled = false,
  className,
  children,
  onClick,
}: ButtonProps) => {
  const buttonStyles = [styles.button, styles[variant], className && className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
