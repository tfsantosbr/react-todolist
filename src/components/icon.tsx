import { iconAnimationVariants } from "../constants/iconAnimationVariants";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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
