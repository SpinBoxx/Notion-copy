import { ReactNode } from "react";
import Navbar from "./components/navbar";

interface Props {
  children: ReactNode;
}

const LandingPageLayout = ({ children }: Props) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-40 ">{children}</main>
    </div>
  );
};

export default LandingPageLayout;
