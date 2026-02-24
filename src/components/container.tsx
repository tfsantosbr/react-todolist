import React from 'react';
import { defaultContainerStyles, containerSizes } from './variants/containerVariants';

type ContainerSize = keyof typeof containerSizes;

interface ContainerProps extends React.ComponentProps<'div'> {
  as?: keyof React.JSX.IntrinsicElements;
  size?: ContainerSize;
}

export default function Container({
  as = 'div',
  size = 'md',
  className,
  children,
  ...props
}: ContainerProps) {
  const containerClassName = [
    defaultContainerStyles,
    containerSizes[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return React.createElement(as, { className: containerClassName, ...props }, children);
}
