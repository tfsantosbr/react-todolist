import { defaultSkeletonStyles, skeletonRounded } from './variants/skeletonVariants';

type SkeletonRounded = keyof typeof skeletonRounded;

interface SkeletonProps extends React.ComponentProps<'div'> {
  rounded?: SkeletonRounded;
}

export default function Skeleton({ rounded = 'lg', className, ...props }: SkeletonProps) {
  const skeletonClassName = [
    defaultSkeletonStyles,
    skeletonRounded[rounded],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={skeletonClassName} {...props} />;
}
