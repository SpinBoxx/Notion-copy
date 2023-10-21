import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden items-center gap-x-2 md:flex">
      <Image
        src="/logo.svg"
        className="dark:hidden"
        height={40}
        width={40}
        alt="Logo"
      />
      <Image
        src="/logo-dark.svg"
        className="hidden dark:block"
        height={40}
        width={40}
        alt="Logo"
      />
      <p className={cn("font-semibold", font.className)}>Jotion</p>
    </div>
  );
};

export default Logo;
