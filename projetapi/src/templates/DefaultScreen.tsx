import React from "react";
import Navbar from "../components/organisms/Navbar";

type DefaultScreenWindow = {
  children: React.ReactNode;
};

const DefaultScreen: React.FC<DefaultScreenWindow> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-10">{children}</main>
    </>
  );
};

export default DefaultScreen;