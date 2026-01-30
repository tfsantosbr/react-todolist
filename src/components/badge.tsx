import {
  badgeSizeVariants,
  badgeTextVariants,
  badgeVariants,
  defaultBadgeStyles,
} from "./variants/badgeVariants";
import Text from "./text";

interface BadgeProps extends React.ComponentProps<"div"> {
  variant?: keyof typeof badgeVariants | keyof typeof badgeTextVariants;
  size?: keyof typeof badgeSizeVariants;
}

export function Badge({
  variant = "primary",
  size = "sm",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={[
        defaultBadgeStyles,
        badgeVariants[variant],
        badgeSizeVariants[size],
        className,
      ].join(" ")}
      {...props}
    >
      <Text
        as="span"
        variant="body-sm-semibold"
        className={badgeTextVariants[variant]}
      >
        {children}
      </Text>
    </div>
  );
}
