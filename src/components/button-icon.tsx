import Icon from './icon';
import {
  defaultButtonIconStyles,
  buttonIconVariants,
  buttonIconSizes,
  buttonIconDisabledStyles,
  buttonIconHandlingStyles,
  buttonIconIconBaseStyles,
  buttonIconIconVariants,
  buttonIconIconSizes,
} from './variants/buttonIconVariants';
import Skeleton from './skeleton';
import SpinnerIcon from '../assets/icons/spinner.svg?react';

type ButtonIconVariant = keyof typeof buttonIconVariants;
type ButtonIconSize = keyof typeof buttonIconSizes;

interface ButtonIconProps extends Omit<React.ComponentProps<'button'>, 'size'> {
  variant?: ButtonIconVariant;
  size?: ButtonIconSize;
  icon: React.ComponentProps<typeof Icon>['svg'];
  className?: string;
  loading?: boolean;
  handling?: boolean;
}

export default function ButtonIcon({
  variant = 'primary',
  size = 'sm',
  disabled = false,
  className,
  icon,
  loading,
  handling,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={[defaultButtonIconStyles, buttonIconSizes[size], className]
          .filter(Boolean)
          .join(' ')}
      />
    );
  }

  const buttonClassName = [
    defaultButtonIconStyles,
    buttonIconVariants[variant],
    buttonIconSizes[size],
    disabled && buttonIconDisabledStyles,
    handling && buttonIconHandlingStyles,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const iconClassName = [
    buttonIconIconBaseStyles,
    buttonIconIconVariants[variant],
    buttonIconIconSizes[size],
  ].join(' ');

  return (
    <button className={buttonClassName} disabled={disabled} {...props}>
      <Icon
        className={iconClassName}
        svg={handling ? SpinnerIcon : icon}
        animation={handling ? 'spin' : 'default'}
      />
    </button>
  );
}
