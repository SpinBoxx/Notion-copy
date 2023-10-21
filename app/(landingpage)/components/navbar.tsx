"use client";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";

import dynamic from "next/dynamic";

const SwitchTheme = dynamic(
  (() =>
    import("@/components/ui/switch-theme").then(
      ({ SwitchTheme }) => SwitchTheme
    )) as any,
  { ssr: false }
) as any;

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "fixed top-0 z-50 flex w-full items-center bg-background p-6 dark:bg-neutral-800",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        Login
        <SwitchTheme />
      </div>
    </div>
  );
};

export default Navbar;
