"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useConvexAuth } from "convex/react";
import Skeleton from "@/components/ui/skeleton";

const Header = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        Your ideas, Documents & Plans. Unified. Welcome to{" "}
        <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base font-medium sm:text-xl md:text-2xl">
        Jotion is the connected workspace where better, faster work happens
      </h3>
      {isAuthenticated && !isLoading && (
        <Button>
          Enter Jotion <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
      {!isAuthenticated && isLoading && (
        <Skeleton className="mt-4" width={140} height={40} />
      )}
    </div>
  );
};

export default Header;
