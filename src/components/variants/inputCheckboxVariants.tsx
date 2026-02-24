export const defaultInputCheckboxWrapperStyles =
  'inline-flex items-center justify-center relative group';

export const defaultInputCheckboxStyles =
  'appearance-none peer flex items-center justify-center cursor-pointer transition overflow-hidden';

export const inputCheckboxStyleVariants = {
  default: `
    border-2 border-solid border-green-base
    hover:border-green-dark hover:bg-green-dark/20
    checked:border-green-base checked:bg-green-base
    group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
  `.trim(),
};

export const inputCheckboxSizes = {
  md: 'w-5 h-5 rounded-sm',
};

export const inputCheckboxDisabledStyles = 'pointer-events-none';

export const defaultInputCheckboxIconStyles =
  'absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block fill-white';

export const inputCheckboxIconSizes = {
  md: 'w-3 h-3',
};
