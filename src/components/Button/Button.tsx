import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps {
  size: "big" | "middle" | "small";
  text: string;
  onClick: () => void;
}

export function Button({ size, text, onClick }: ButtonProps) {
  return (
    <button
      className={clsx(styles.root, {
        [styles.big]: size === "big",
        [styles.middle]: size === "middle",
        [styles.small]: size === "small",
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
