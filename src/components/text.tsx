import React from "react";

const commonClassNames = "font-sans text-gray-400";

const textVariants = {
  "body-md-regular": "text-base leading-6 font-normal",
  "body-md-semibold": "text-base leading-6 font-semibold",
  "body-sm-semibold": "text-sm leading-6 font-semibold",
};

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
        `${commonClassNames} ${textVariants[variant]} ${className || ""}`.trim(),
      ...props,
    },
    children,
  );
}
