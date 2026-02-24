import CheckIcon from '../assets/icons/check.svg?react';
import Icon from './icon';
import {
  defaultInputCheckboxWrapperStyles,
  defaultInputCheckboxStyles,
  inputCheckboxStyleVariants,
  inputCheckboxSizes,
  inputCheckboxDisabledStyles,
  defaultInputCheckboxIconStyles,
  inputCheckboxIconSizes,
} from './variants/inputCheckboxVariants';
import Skeleton from './skeleton';

type InputCheckboxSize = keyof typeof inputCheckboxSizes;

interface InputCheckboxProps extends Omit<React.ComponentProps<'input'>, 'size'> {
  size?: InputCheckboxSize;
  disabled?: boolean;
  loading?: boolean;
}

export default function InputCheckbox({
  size = 'md',
  disabled = false,
  className,
  loading,
  ...props
}: InputCheckboxProps) {
  if (loading) {
    return <Skeleton rounded="sm" className={inputCheckboxSizes[size]} />;
  }

  const inputClassName = [
    defaultInputCheckboxStyles,
    inputCheckboxStyleVariants.default,
    inputCheckboxSizes[size],
    disabled && inputCheckboxDisabledStyles,
  ]
    .filter(Boolean)
    .join(' ');

  const iconClassName = [
    defaultInputCheckboxIconStyles,
    inputCheckboxIconSizes[size],
  ].join(' ');

  return (
    <label className={[defaultInputCheckboxWrapperStyles, className].filter(Boolean).join(' ')}>
      <input type="checkbox" className={inputClassName} disabled={disabled} {...props} />
      <Icon className={iconClassName} svg={CheckIcon} />
    </label>
  );
}
