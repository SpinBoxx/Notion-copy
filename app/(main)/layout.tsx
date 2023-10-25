"use client";

import { useConvexAuth } from "convex/react";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import Navigation from "./components/navigation";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="animate-spin" size={32} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }
  return (
    <div className="flex h-full">
      <Navigation />
      <main className="h-full flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
