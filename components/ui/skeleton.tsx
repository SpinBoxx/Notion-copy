import clsx from "clsx";
import { SkeletonProps, default as Skeletonn } from "react-loading-skeleton";

export const Skeleton = ({
  count,
  height,
  width,
  className,
  borderRadius,
  duration,
}: SkeletonProps) => {
  return (
    <Skeletonn
      className={clsx(
        "dark:bg-slate-900 dark:after:!bg-gradient-to-r dark:after:!from-transparent dark:after:!via-slate-800 dark:after:!to-transparent ",
        className
      )}
      borderRadius={borderRadius ?? "0.5rem"}
      duration={duration}
      count={count}
      width={width}
      height={height}
    />
  );
};

export default Skeleton;
