"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const SwitchTheme = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <SwitchPrimitives.Root
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
        } else if (theme === "dark") {
          setTheme("light");
        }
      }}
      defaultChecked={theme === "dark"}
      className={cn(
        "group peer relative z-10 inline-flex h-[28px] w-[57px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-input transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
      ref={ref}
    >
      <Sun className="absolute left-[0.45rem] z-50 h-4 w-4 text-black group-data-[state=checked]:text-slate-600 group-data-[state=unchecked]:text-slate-100" />
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-[22px] w-[22px] rounded-full bg-slate-500 shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-1"
        )}
      />
      <Moon className="absolute right-1.5 z-50 h-4 w-4 text-black group-data-[state=checked]:text-slate-100 group-data-[state=unchecked]:text-slate-600" />
    </SwitchPrimitives.Root>
  );
});
SwitchTheme.displayName = SwitchPrimitives.Root.displayName;

export { SwitchTheme };
