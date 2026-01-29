import React from "react";
import { commonTextClassNames, textVariants } from "../constants/textVariants";

interface TextProps {
  as?: keyof React.JSX.IntrinsicElements;
  variant?: keyof typeof textVariants;
  className?: string;
  children?: React.ReactNode;
}

export default function Text({
  as = "span",
  variant = "body-md-regular",
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className:
        `${commonTextClassNames} ${textVariants[variant]} ${className || ""}`.trim(),
      ...props,
    },
    children,
  );
}
