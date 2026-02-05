import Icon from './icon';
import Text from './text';
import {
  defaultButtonStyles,
  buttonVariants,
  buttonSizes,
  buttonDisabledStyles,
  buttonHandlingStyles,
  buttonIconBaseStyles,
  buttonIconVariants,
  buttonIconSizes,
  buttonTextVariants,
} from './variants/buttonVariants';

import SpinnerIcon from '../assets/icons/spinner.svg?react';

type ButtonVariant = keyof typeof buttonVariants;
type ButtonSize = keyof typeof buttonSizes;

interface ButtonProps extends Omit<React.ComponentProps<'button'>, 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  handling?: boolean;
  icon?: React.ComponentProps<typeof Icon>['svg'];
  className?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  handling = false,
  className,
  children,
  icon,
  ...props
}: ButtonProps) {
  const buttonClassName = [
    defaultButtonStyles,
    buttonVariants[variant],
    buttonSizes[size],
    disabled && buttonDisabledStyles,
    handling && buttonHandlingStyles,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const iconClassName = [
    buttonIconBaseStyles,
    buttonIconVariants[variant],
    buttonIconSizes[size],
  ].join(' ');

  return (
    <button className={buttonClassName} disabled={disabled} {...props}>
      {icon && (
        <Icon
          svg={handling ? SpinnerIcon : icon}
          animation={handling ? 'spin' : 'default'}
          className={iconClassName}
        />
      )}
      <Text variant='body-md-semibold' className={buttonTextVariants[variant]}>
        {children}
      </Text>
    </button>
  );
}
