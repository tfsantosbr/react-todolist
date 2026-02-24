import {
  defaultInputTextStyles,
  inputTextSizes,
  inputTextDisabledStyles,
} from "./variants/inputTextVariants";
import { commonTextClassNames, textVariants } from "./variants/textVariants";

type InputTextSize = keyof typeof inputTextSizes;

interface InputTextProps extends Omit<React.ComponentProps<"input">, "size"> {
  size?: InputTextSize;
}

export default function InputText({
  size = "md",
  disabled = false,
  className,
  ...props
}: InputTextProps) {
  const inputClassName = [
    defaultInputTextStyles,
    inputTextSizes[size],
    disabled && inputTextDisabledStyles,
    commonTextClassNames,
    textVariants["body-md-regular"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <input className={inputClassName} disabled={disabled} {...props} />;
}
