import Navbar from "@/components/site/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full">
      <Navbar />
      {children}
    </main>
  );
};

export default layout;
