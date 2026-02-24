import React from 'react';
import { defaultCardStyles, cardSizes } from './variants/cardVariants';

type CardSize = keyof typeof cardSizes;

interface CardProps extends React.ComponentProps<'div'> {
  as?: keyof React.JSX.IntrinsicElements;
  size?: CardSize;
}

export default function Card({
  as = 'div',
  size = 'none',
  className,
  children,
  ...props
}: CardProps) {
  const cardClassName = [defaultCardStyles, cardSizes[size], className]
    .filter(Boolean)
    .join(' ');

  return React.createElement(as, { className: cardClassName, ...props }, children);
}
