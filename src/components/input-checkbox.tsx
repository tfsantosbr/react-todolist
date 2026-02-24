import CheckIcon from '../assets/icons/check.svg?react';
import Icon from './icon';
import {
  defaultInputCheckboxWrapperStyles,
  defaultInputCheckboxStyles,
  inputCheckboxSizes,
  inputCheckboxDisabledStyles,
  defaultInputCheckboxIconStyles,
  inputCheckboxIconSizes,
} from './variants/inputCheckboxVariants';

type InputCheckboxSize = keyof typeof inputCheckboxSizes;

interface InputCheckboxProps extends Omit<React.ComponentProps<'input'>, 'size'> {
  size?: InputCheckboxSize;
  disabled?: boolean;
}

export default function InputCheckbox({
  size = 'md',
  disabled = false,
  className,
  ...props
}: InputCheckboxProps) {
  const inputClassName = [
    defaultInputCheckboxStyles,
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
