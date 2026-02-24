import Icon from './icon';
import {
  defaultButtonIconStyles,
  buttonIconVariants,
  buttonIconSizes,
  buttonIconDisabledStyles,
  buttonIconIconBaseStyles,
  buttonIconIconVariants,
  buttonIconIconSizes,
} from './variants/buttonIconVariants';

type ButtonIconVariant = keyof typeof buttonIconVariants;
type ButtonIconSize = keyof typeof buttonIconSizes;

interface ButtonIconProps extends Omit<React.ComponentProps<'button'>, 'size'> {
  variant?: ButtonIconVariant;
  size?: ButtonIconSize;
  icon: React.ComponentProps<typeof Icon>['svg'];
  className?: string;
}

export default function ButtonIcon({
  variant = 'primary',
  size = 'sm',
  disabled = false,
  className,
  icon,
  ...props
}: ButtonIconProps) {
  const buttonClassName = [
    defaultButtonIconStyles,
    buttonIconVariants[variant],
    buttonIconSizes[size],
    disabled && buttonIconDisabledStyles,
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
      <Icon className={iconClassName} svg={icon} />
    </button>
  );
}
