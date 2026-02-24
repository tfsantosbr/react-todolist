---
paths:
  - "src/components/**/*.tsx"
---

# Component Pattern

When creating UI components, follow this structure:

## File naming

Use **kebab-case** for all component filenames:
- Component file: `src/components/component-name.tsx`
- Variants file: `src/components/variants/componentNameVariants.tsx`

Examples: `button-icon.tsx`, `input-text.tsx`, `icon.tsx`

## 1. Variants file: `src/components/variants/<componentName>Variants.tsx`

Define all styling as plain exported `const` objects — no CVA or external variant libraries.

```ts
export const defaultXxxStyles = '...base classes...';

export const xxxVariants = {
  primary: '...',
  secondary: '...',
};

export const xxxSizes = {
  sm: '...',
  md: '...',
};

export const xxxDisabledStyles = '...';

// Sub-element variants follow the same pattern
export const xxxIconBaseStyles = '...';
export const xxxIconVariants = { ... };
export const xxxIconSizes = { ... };
```

## 2. Component file: `src/components/<component-name>.tsx`

```tsx
import { defaultXxxStyles, xxxVariants, xxxSizes, xxxDisabledStyles } from './variants/xxxVariants';

type XxxVariant = keyof typeof xxxVariants;
type XxxSize = keyof typeof xxxSizes;

interface XxxProps extends Omit<React.ComponentProps<'button'>, 'size'> {
  variant?: XxxVariant;
  size?: XxxSize;
  // add extra props here; do NOT redeclare props already in the base HTML type
}

export default function Xxx({ variant = 'primary', size = 'md', disabled = false, className, ...props }: XxxProps) {
  const buttonClassName = [
    defaultXxxStyles,
    xxxVariants[variant],
    xxxSizes[size],
    disabled && xxxDisabledStyles,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <button className={buttonClassName} disabled={disabled} {...props} />;
}
```

## Key rules
- No CVA (`class-variance-authority`) — use plain object maps instead
- Class names built with array + `.filter(Boolean).join(' ')`
- Types derived with `keyof typeof variantObject`
- Omit native HTML props only when redefining them with a different type (e.g., `size` as string vs number)
- Do not redeclare props that are already inherited from the base HTML type unchanged (e.g., `disabled?: boolean`)
