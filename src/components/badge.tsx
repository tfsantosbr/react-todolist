import {
  badgeSkeletonSizes,
  badgeSizeVariants,
  badgeTextVariants,
  badgeVariants,
  defaultBadgeStyles,
} from "./variants/badgeVariants";
import Text from "./text";
import Skeleton from "./skeleton";

interface BadgeProps extends React.ComponentProps<"div"> {
  variant?: keyof typeof badgeVariants | keyof typeof badgeTextVariants;
  size?: keyof typeof badgeSizeVariants;
  loading?: boolean;
}

export default function Badge({
  variant = "primary",
  size = "sm",
  className,
  children,
  loading,
  ...props
}: BadgeProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="full"
        className={[defaultBadgeStyles, badgeSkeletonSizes[size], className]
          .filter(Boolean)
          .join(" ")}
      />
    );
  }

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
