"use client";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";

import "react-loading-skeleton/dist/skeleton.css";
import dynamic from "next/dynamic";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Skeleton from "@/components/ui/skeleton";

const SwitchTheme = dynamic(
  (() =>
    import("@/components/ui/switch-theme").then(
      ({ SwitchTheme }) => SwitchTheme
    )) as any,
  { ssr: false }
) as any;

const Navbar = () => {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div
      className={cn(
        "fixed top-0 z-50 flex w-full items-center bg-background p-6 ",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Jotion free</Button>
            </SignInButton>
          </>
        )}
        {isLoading && <Skeleton height={30} width={100} />}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm">
              <Link href="/documents">Enter Jotion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <SwitchTheme />
      </div>
    </div>
  );
};

export default Navbar;
