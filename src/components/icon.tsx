import { iconAnimationVariants } from "./variants/iconVariants";

interface IconProps extends React.ComponentProps<"svg"> {
  svg: React.FC<React.ComponentProps<"svg">>;
  className?: string;
  animation?: keyof typeof iconAnimationVariants;
}

export default function Icon({
  svg: SvgComponent,
  className,
  animation = "default",
  ...props
}: IconProps) {
  return (
    <SvgComponent
      className={`${iconAnimationVariants[animation]} ${className || ""}`}
      {...props}
    />
  );
}
